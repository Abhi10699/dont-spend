'use client'

import { useEffect, useState } from "react";
import { ExpenseCard } from "../components/ExpenseCard";
import { withAuth } from "../withAuth"
import supabase from "../supabase";

interface IExpense {
  itemName: string;
  itemCost: number;
  daysSaved: number;
}

class ExpenseState {
  itemName!: string;
  itemCost!: number;
  daysSaved!: number;

  constructor(expense: IExpense) {
    this.itemName = expense.itemName;
    this.itemCost = expense.itemCost;
    this.daysSaved = expense.daysSaved;
  }
}


function Home(props: any) {

  const [userExpenses, setUserExpenses] = useState<ExpenseState[]>()

  useEffect(() => {
    fetchUserExpenses()
  }, [])


  const fetchUserExpenses = async () => {
    let { data: expenses, error } = await supabase
      .from('expenses')
      .select('*')


    if (expenses?.length) {
      const e = expenses.map(d => new ExpenseState(d)) as ExpenseState[]
      setUserExpenses(e);
    }
  }

  return (
    <div className="container mx-auto p-6">
      {userExpenses?.map(e => <ExpenseCard
        itemName={e.itemName}
        itemPrice={e.itemCost}
        streakDays={e.daysSaved}
        goals={[{ goalAmount: 150, goalDays: 10, goalTitle: "New Balance 550 Shoes" }]}
        moneySaved={e.daysSaved * e.itemCost}
      />)}
    </div>
  )
}

export default withAuth(Home);