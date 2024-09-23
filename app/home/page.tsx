'use client'
import { useEffect, useState } from "react";
import { ExpenseCard } from "@/components/ExpenseCard";
import { ExpenseState } from "@/lib/models/expense.model";
import { fetchUserExpenses, fetchUserGoals } from "@/lib/services/expense.service";

function Home() {

  const [userExpenses, setUserExpenses] = useState<ExpenseState[]>()
  const [userGoals, setUserGoals] = useState<any>();

  useEffect(() => {
    fetchUserExpenses()
      .then(data => setUserExpenses(data))
      .catch(_ => setUserExpenses([]));

    fetchUserGoals()
      .then(goals => setUserGoals(goals))
      .catch(err => {
        setUserGoals([])
      })
  }, [])


  if(userExpenses && userExpenses.length > 0) {
    return (
      <div className="flex flex-col gap-8 my-4">
        {userExpenses?.map(e => <ExpenseCard
          id={e.id}
          itemName={e.itemName}
          itemPrice={e.itemCost}
          streakDays={e.streakDays}
          goals={userGoals}
          moneySaved={e.totalSaved}
        />)}
      </div>
    )  
  }
  else {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-xl text-center text-gray-500">Start Adding Expenses by Clicking the "+" Icon</h1>
      </div>
    )
  }
}

export default Home;