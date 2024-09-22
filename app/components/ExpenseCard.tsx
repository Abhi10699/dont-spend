import { updateUserDaysSaved } from "../home/services/expense.service"

type ExpenseCardProps = {
  itemName: string;
  itemPrice: number;
  moneySaved: number;
  streakDays: number;
  id: number,
  goals: Array<{
    goalAmount: number,
    goalDays: number,
    goalTitle: string
  }>
}
export function ExpenseCard(props: ExpenseCardProps) {
  return (
    <div className="p-6 bg-[#131313] rounded-lg shadow-lg grid gap-4">
      <div className="flex flex-row justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-gray-300">{props.itemName}</h3>
          <p className="text-sm md:text-base text-gray-400">${props.itemPrice}</p>
          <div className="mt-4">
            <h4 className="text-2xl md:text-3xl font-bold text-yellow-400">${Math.abs(props.moneySaved)} {props.moneySaved < 0 ? "Wasted" : "Saved"}</h4>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-4xl">🔥</p>
          <p className="font-bold">{props.streakDays} Days</p>
        </div>
      </div>
      <div className="flex flex-col justify-between mt-4 md:mt-0">
        <div className="flex justify-start md:justify-end gap-2 mb-4">
          <button onClick={_ => updateUserDaysSaved(props.id)} className="py-3 w-full border-2 border-red-500 text-white rounded-lg bg-red-600">Spent 😖</button>
        </div>
        {props.goals.length != 0 && <div className="border-t border-gray-700 pt-4">
          <h4 className="text-lg font-medium text-gray-300">Goals</h4>
          <ul className="mt-2">
            {props.goals.map(item =>
              <li className="text-sm text-gray-400 mb-6">
                {item.goalTitle}: <strong className="text-white">{item.goalDays} days</strong> to reach target
                <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </li>
            )}
          </ul>
        </div>}
      </div>
    </div>

  )
}