'use client'
import { useEffect, useState } from "react";
import { ExpenseCard } from "@/components/ExpenseCard";
import { ExpenseState } from "@/lib/models/expense.model";
import { fetchUserExpenses, fetchUserGoals, updateUserDaysSaved } from "@/lib/services/expense.service";
import { IGoal } from "@/lib/models/goal.model";

function Home() {

  const [userExpenses, setUserExpenses] = useState<ExpenseState[]>()
  const [userGoals, setUserGoals] = useState<IGoal[]>([]);
  const [hydrateData, setHydrateData] = useState(0);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [spentItemId, setSpentItemId] = useState<number>(-1);



  useEffect(() => {
    fetchUserExpenses()
      .then(data => setUserExpenses(data))
      .catch(() => setUserExpenses([]));

    fetchUserGoals()
      .then(goals => setUserGoals(goals))
      .catch(() => {
        setUserGoals([])
      })
  }, [hydrateData])


  const handleItemSpentClick = (itemId: number) => {
    setSpentItemId(itemId);
    setDialogOpen(true)
  }

  const handleDialogSpentClick = async () => {
    await updateUserDaysSaved(spentItemId);
    setSpentItemId(-1);
    setDialogOpen(false);
    setHydrateData(e => e + 1);
  }


  if (userExpenses && userExpenses.length > 0) {
    return (
      <div className="flex flex-col gap-8 my-4 relative backdrop:bg-red-300 backdrop:opacity-45">
        {userExpenses?.map(e => <ExpenseCard
          key={e.id}
          id={e.id}
          itemName={e.itemName}
          itemPrice={e.itemCost}
          streakDays={e.streakDays}
          goals={userGoals}
          moneySaved={e.totalSaved}
          onClickSpent={itemId => handleItemSpentClick(itemId)}
        />)}
        <div className={`${dialogOpen ? "fixed" : "hidden"} inset-0 z-10 backdrop-blur-sm backdrop-brightness-50`}></div>
        <dialog open={dialogOpen} className="bg-[#131313] text-white w-full max-w-md p-6 rounded-lg shadow-lg mx-auto z-10">
          <h1 className="text-2xl font-black mb-4">Confirm Expense</h1>

          <p className="text-gray-400 mb-6">Are you sure you want to mark this as an expense? This action will <b>break your current streak and reduce your savings.</b></p>

          <div className="flex flex-row gap-4 justify-center">
            <button onClick={() => handleDialogSpentClick()} className="border-red-500 border-2 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition">
              Yes, I am Sure
            </button>
            <button onClick={() => { setDialogOpen(false); setSpentItemId(-1) }} className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-500 transition">
              No, It was a Mistake
            </button>
          </div>
        </dialog >
      </div >
    )
  }
  else {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-xl text-center text-gray-500">Start Adding Expenses by Clicking the <span className="italic text-xl">+</span> Icon</h1>
      </div>
    )
  }
}

export default Home;