'use client';

import { IGoal } from "@/lib/models/goal.model";
import Link from "next/link";
type ExpenseCardProps = {
  itemName: string;
  itemPrice: number;
  moneySaved: number;
  streakDays: number;
  id: number,
  goals: IGoal[]
  onClickSpent(itemId: number): void
}
export function ExpenseCard(props: ExpenseCardProps) {
  return (
    <div className="p-6 bg-[#131313] rounded-lg shadow-lg grid gap-4 relative">
      <div className="flex flex-row justify-between">
        <div>
          <h3 className="text-lg md:text-lg font-bold text-gray-300">{props.itemName}</h3>
          <p className="text-md md:text-base text-gray-400">${props.itemPrice}</p>
          <div className="mt-4">
            <h4 className={`text-2xl md:text-3xl font-bold ${props.moneySaved < 0 ? 'text-red-400' : 'text-green-400'}`}>${Math.abs(props.moneySaved).toPrecision(3)} {props.moneySaved < 0 ? "Spent" : "Saved"}</h4>
            <p className="text-gray-600 text-md mt-2">
              Save ${props.itemPrice} daily to save ${Math.round(props.itemPrice * 365)} yearly!
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-4xl">{props.streakDays <= 0 ? "💀" : "🔥"}</p>
          <p className="font-bold">{props.streakDays} Days Streak</p>
        </div>
      </div>
      <div className="flex flex-col justify-between mt-4 md:mt-0">
        <div className="flex justify-start md:justify-end gap-2 mb-4">
          <button onClick={() => props.onClickSpent(props.id)} className="py-3 w-full border-2 border-red-500 text-white rounded-lg ">Spent 😖</button>
        </div>
        {props.goals && props.goals.length != 0 ? <div className="border-t border-gray-700 pt-4">
          <h4 className="text-lg font-medium text-gray-300">Goals</h4>
          <ul className="mt-2">
            {props.goals.map(item =>
              <li className="text-sm text-gray-400 mb-6" key={item.id}>
                {item.purchase_name} (${item.purchase_amount}): <strong className="text-white">${(item.purchase_amount - props.moneySaved).toPrecision(4)}</strong> to reach target
                <div className="w-full bg-gray-700 rounded-sm h-2.5 mt-2">
                  <div className="bg-indigo-500 h-2.5 rounded-md" style={{ width: props.moneySaved < 0 ? '0%' : `${(props.moneySaved / item.purchase_amount) * 100}%` }}></div>
                </div>
              </li>
            )}
          </ul>
        </div> :
          <Link className="border-dashed border-gray-300 border-2 rounded-lg p-5" href='/home/add?isGoal=true'>
            <button className="w-full">
              Create New Goal
            </button>
          </Link>
        }
      </div>
    </div>
  )
}