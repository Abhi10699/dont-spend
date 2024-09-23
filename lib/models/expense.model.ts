export interface IExpense {
  itemName: string;
  itemCost: number;
  times_spent: number;
  streak_updated_at: string
  created_at: string
  id: number
}

export class ExpenseState {
  itemName!: string;
  itemCost!: number;
  timesSpent!: number;
  streakDays!: number
  createdSinceDays!: number
  totalSaved!: number
  id!: number

  constructor(expense: IExpense) {
    this.itemName = expense.itemName;
    this.itemCost = expense.itemCost;
    this.timesSpent = expense.times_spent;
    this.streakDays = this.computeDays(expense.streak_updated_at);
    this.createdSinceDays = this.computeDays(expense.created_at);
    this.totalSaved = (this.createdSinceDays * this.itemCost) - (this.timesSpent * this.itemCost);
    this.id = expense.id
 }

  computeDays(dateTimestamp: string) {
    const targetDate = new Date(dateTimestamp);
    const targetDateMs = targetDate.getTime()
    const today = Date.now()
    const streakDays = Math.floor((targetDateMs - today) / (1000 * 3600 * 24))
    return streakDays < 0 ? 0 : streakDays
  }
}