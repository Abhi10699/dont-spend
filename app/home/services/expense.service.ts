import supabase from "@/app/supabase";
import { ExpenseState, IExpense } from "../models/expense.model";


const TABLE_NAME = "expenses";

// fetch user expenses
export async function fetchUserExpenses() {
  let { data: expenses, error } = await supabase
    .from(TABLE_NAME)
    .select('*')
    .order("times_spent", {ascending: false})

  if (error) {
    throw new Error(error.message);
  }
  const expenseModels = expenses?.map(e => new ExpenseState(e))
  return expenseModels;
}

// insert new expense
export async function insertUserExpense(payload: IExpense) {
  // console.log(payload);
  const userObj = await supabase.auth.getUser()
  let { data, error } = await supabase.from(TABLE_NAME).insert([{
    itemName: payload.itemName,
    itemCost: payload.itemCost,
    user_id: userObj.data.user?.id
  }]);

  console.log("Error: ", error)
  console.log("Data: ", data);
}

// Update days saved

export async function updateUserDaysSaved(expense_id: number) {
  console.log(expense_id);
  let { data, error } = await supabase
    .rpc('break_streak', {
      expense_id
    })
  if (error) console.error(error)
  else console.log(data)
}