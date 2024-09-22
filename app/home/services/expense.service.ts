import supabase from "@/app/supabase";
import { ExpenseState, IExpense } from "../models/expense.model";


// fetch user expenses
export async function fetchUserExpenses() {
  let { data: expenses, error } = await supabase
    .from('expenses')
    .select('*')

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
  let { data, error } = await supabase.from('expenses').insert([{
    itemName: payload.itemName,
    itemCost: payload.itemCost,
    user_id: userObj.data.user?.id
  }]);

  console.log("Error: ", error)
  console.log("Data: ", data);
}