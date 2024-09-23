'use client'
import { useForm } from "react-hook-form"
import { IExpense } from "@/lib/models/expense.model";
import { insertUserExpense, insertUserGoal } from "@/lib/services/expense.service";
import { useSearchParams } from 'next/navigation';


type IItem = IExpense & {isGoal: boolean};

export default function AddExpense() {
  const routeParam = useSearchParams();
  const { register, formState, handleSubmit } = useForm<IItem>({
    defaultValues: {
      itemName: '',
      itemCost: 0,
      isGoal: routeParam.get('isGoal') == 'true'
    }
  });


  const handleFormSubmit = (item: IItem) => {
    if (item.isGoal) {
      insertUserGoal(item);
    }
    else {
      insertUserExpense(item);
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

      <div className="mb-4 flex">
        <input type="checkbox" id="goalCheck" {...register('isGoal')} />
        <label htmlFor="goalCheck" className="mx-2 block text-white">Set as Goal</label>
      </div>

      <button
        onClick={handleSubmit(handleFormSubmit)}
        type="button"
        disabled={!formState.isValid}
        className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500  focus:ring-indigo-400 disabled:bg-gray-500 transition-colors"
      >
        Create Expense
      </button>
    </div>
  )
}