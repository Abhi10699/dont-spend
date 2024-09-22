export interface IExpense {
  itemName: string;
  itemCost: number;
  daysSaved: number;
  streak_updated_at: string
}

export class ExpenseState {
  itemName!: string;
  itemCost!: number;
  daysSaved!: number;
  streakDays: number

  constructor(expense: IExpense) {
    this.itemName = expense.itemName;
    this.itemCost = expense.itemCost;
    this.daysSaved = expense.daysSaved;
    this.streakDays = this.computeDays(expense.streak_updated_at);
  }


  computeDays(dateTimestamp: string) {
    const targetDate = new Date(dateTimestamp);
    const targetDateMs = targetDate.getTime()
    const today = Date.now()
    const streakDays = Math.floor((targetDateMs - today) / (1000 * 3600 * 24)) + 1
    return streakDays
  }
}