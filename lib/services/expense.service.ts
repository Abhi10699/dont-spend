import supabase from "@/lib/supabase";
import { ExpenseState, IExpense } from "@/lib/models/expense.model";
import { IGoal } from "../models/goal.model";


const TABLE_NAME = "expenses";

// fetch user expenses and goals
export async function fetchUserExpenses() {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select('*')
    .order("times_spent", { ascending: false })
  if (error) {
    throw new Error(error.message);
  }
  const expenseModels = data?.map(e => new ExpenseState(e))
  return expenseModels;
}

export async function fetchUserGoals() {
  const { data: goals, error } = await supabase
    .from('user_goals')
    .select('*')
  if (error) {
    throw new Error(error.message);
  }
  return goals as IGoal[];
}


// insert new expense
export async function insertUserExpense(payload: IExpense) {
  const userObj = await supabase.auth.getUser()
  const { data, error } = await supabase.from(TABLE_NAME).insert([{
    itemName: payload.itemName,
    itemCost: payload.itemCost,
    user_id: userObj.data.user?.id
  }]);

  return { data, error }
}

export async function insertUserGoal(payload: IExpense) {
  const userObj = await supabase.auth.getUser()
  const { data, error } = await supabase.from('user_goals').insert([{
    purchase_name: payload.itemName,
    purchase_amount: payload.itemCost,
    user_id: userObj.data.user?.id
  }]);

  return { data, error }
}

// Update days saved

export async function updateUserDaysSaved(expense_id: number) {
  const { data, error } = await supabase
    .rpc('break_streak', {
      expense_id
    })
  if (error) console.error(error)
  else console.log(data)
}