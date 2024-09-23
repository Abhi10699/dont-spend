'use client'
import { useForm } from "react-hook-form"
import { IExpense } from "@/lib/models/expense.model";
import { insertUserExpense, insertUserGoal } from "@/lib/services/expense.service";
import { useSearchParams } from 'next/navigation';
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";


type IItem = IExpense & { isGoal: boolean };

export default function AddExpense() {
  const [isGoalMarked, setIsGoalMarked] = useState<boolean>();
  const routeParam = useSearchParams();
  const router = useRouter();

  const { register, formState, handleSubmit } = useForm<IItem>({
    defaultValues: {
      itemName: '',
      itemCost: 0,
      isGoal: routeParam.get('isGoal') == 'true'
    },
    reValidateMode: "onChange"
  });

  const handleFormSubmit = async (item: IItem) => {
    if (item.isGoal) {
      const { error } = await insertUserGoal(item);
      if (!error) {
        router.replace("/home")
      }
    }
    else {
      const { error } = await insertUserExpense(item);
      if (!error) {
        router.replace("/home")
      }
    }
  }


  return (
    <div>
      <div className="mb-4">
        <label htmlFor="itemName" className="block text-white mb-2">Item Name</label>
        <input
          type="text"
          className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter item name"
          {...register('itemName', { required: true })}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="itemPrice" className="block text-white mb-2">Item Price</label>
        <input
          type="number"
          className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter item price"
          {...register('itemCost', { required: true, valueAsNumber: true })}
        />
      </div>

      <div className="mb-4">
        <div className="flex flex-row items-center">
          <input type="checkbox" id="goalCheck" {...register('isGoal')} onChange={e => setIsGoalMarked(e.target.checked)} />
          <label htmlFor="goalCheck" className="mx-2 block text-white">Set as Goal</label>
        </div>
        <p className="my-2 text-sm text-gray-600 italic">{isGoalMarked ? "Goals help you save for specific targets like shoes or vacations" : "Expenses track your daily spending."} Start by setting up expenses if you {"haven't"} yet.</p>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={handleSubmit(handleFormSubmit)}
          type="button"
          disabled={!formState.isValid}
          className={`w-full p-3 ${isGoalMarked ? "bg-green-600" : "bg-red-500"} text-white rounded-lg hover:bg-indigo-500  focus:ring-indigo-400 disabled:bg-gray-500 transition-colors`}
        >
          Create {isGoalMarked ? "Goal" : "Expense"}
        </button>

        <Link href="/home" className="my-3">
          <button
            type="button"
            className="w-full p-3 border-gray-600 border-2 text-white rounded-lg hover:bg-gray-500 transition-colors"
          >
            Go Back
          </button>
        </Link>
      </div>
    </div>
  )
}