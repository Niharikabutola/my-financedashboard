import React from "react";
import "./Insights.css";

function Insights({ transactions }) {
  if (transactions.length === 0) {
    return <div className="insights"><h2>Insights</h2><p>No data available.</p></div>;
  }

  const expenseMap = {};
  transactions.forEach(t => {
    if (t.type === "expense") {
      expenseMap[t.category] = (expenseMap[t.category] || 0) + t.amount;
    }
  });
  const highestCategory = Object.keys(expenseMap).reduce((a, b) => expenseMap[a] > expenseMap[b] ? a : b, "");

 
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;

  const currentIncome = transactions
    .filter(t => t.type === "income" && new Date(t.date).getMonth() === currentMonth && new Date(t.date).getFullYear() === currentYear)
    .reduce((sum, t) => sum + t.amount, 0);

  const currentExpense = transactions
    .filter(t => t.type === "expense" && new Date(t.date).getMonth() === currentMonth && new Date(t.date).getFullYear() === currentYear)
    .reduce((sum, t) => sum + t.amount, 0);

  const prevIncome = transactions
    .filter(t => t.type === "income" && new Date(t.date).getMonth() === prevMonth && new Date(t.date).getFullYear() === prevYear)
    .reduce((sum, t) => sum + t.amount, 0);

  const prevExpense = transactions
    .filter(t => t.type === "expense" && new Date(t.date).getMonth() === prevMonth && new Date(t.date).getFullYear() === prevYear)
    .reduce((sum, t) => sum + t.amount, 0);

  const incomeChange = prevIncome === 0 ? 0 : ((currentIncome - prevIncome) / prevIncome * 100).toFixed(2);
  const expenseChange = prevExpense === 0 ? 0 : ((currentExpense - prevExpense) / prevExpense * 100).toFixed(2);

  return (
    <div className="insights">
      <h2>Insights</h2>
      <div className="insight-cards">
        <div className="insight-card">
          <h3>Highest Spending Category</h3>
          <p>{highestCategory || "None"} - ₹{expenseMap[highestCategory] || 0}</p>
        </div>
        <div className="insight-card">
          <h3>Monthly Income Comparison</h3>
          <p>Current: ₹{currentIncome} ({incomeChange >= 0 ? "+" : ""}{incomeChange}% from last month)</p>
        </div>
        <div className="insight-card">
          <h3>Monthly Expense Comparison</h3>
          <p>Current: ₹{currentExpense} ({expenseChange >= 0 ? "+" : ""}{expenseChange}% from last month)</p>
        </div>
      </div>
    </div>
  );
}

export default Insights;