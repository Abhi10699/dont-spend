import supabase from "@/app/supabase";
import { ExpenseState } from "../models/expense.model";


// fetch user expenses
export const fetchUserExpenses = async () => {
  let { data: expenses, error } = await supabase
    .from('expenses')
    .select('*')

  if (error) {
    throw new Error(error.message);
  }
  const expenseModels = expenses?.map(e => new ExpenseState(e))
  return expenseModels;
}
