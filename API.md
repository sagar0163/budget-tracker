# Budget Tracker - API Reference

## Data Structure

### Budget Category
```javascript
{
  id: string,
  name: string,
  amount: number,
  spent: number,
  color: string,
  icon: string
}
```

## Components

### BudgetCard
Display individual budget category.

```vue
<BudgetCard 
  :title="'Groceries'"
  :amount="500"
  :spent="250"
  :color="'#4CAF50'"
/>
```

### BudgetForm
Add/edit budget categories.

```vue
<BudgetForm @submit="addBudget" />
```

### ExpenseModal
Record expenses.

```vue
<ExpenseModal 
  :categoryId="'1'"
  @expense="addExpense"
/>
```

## Computed Properties

| Property | Description |
|----------|-------------|
| `totalBudget` | Sum of all budget amounts |
| `totalSpent` | Sum of all expenses |
| `remaining` | totalBudget - totalSpent |
| `percentUsed` | (totalSpent / totalBudget) * 100 |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `add-budget` | Budget object | New budget added |
| `add-expense` | Expense object | Expense recorded |
| `delete-budget` | Budget ID | Budget deleted |
