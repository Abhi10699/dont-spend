'use client'

import { useEffect, useState } from "react";
import { ExpenseCard } from "../components/ExpenseCard";
import { ExpenseState } from "./models/expense.model";
import { fetchUserExpenses } from "./services/expense.service";


function Home(props: any) {

  const [userExpenses, setUserExpenses] = useState<ExpenseState[]>()

  useEffect(() => {
    fetchUserExpenses()
      .then(data => setUserExpenses(data))
      .catch(_ => setUserExpenses([]));
  }, [])


  return (
    <div className="flex flex-col gap-3">
      {userExpenses?.map(e => <ExpenseCard
        id={e.id}
        itemName={e.itemName}
        itemPrice={e.itemCost}
        streakDays={e.streakDays}
        goals={[{ goalAmount: 150, goalDays: 10, goalTitle: "New Balance 550 Shoes" }]}
        moneySaved={e.totalSaved}
      />)}
    </div>
  )
}

export default Home;