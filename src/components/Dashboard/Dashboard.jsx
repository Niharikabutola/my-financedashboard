import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend
} from "recharts";
import "./Dashboard.css";

function Dashboard({ transactions }) {

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  const trendData = transactions.map(t => ({
    date: t.date,
    amount: t.type === "income" ? t.amount : -t.amount
  }));

  const categoryMap = {};
  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const categoryData = Object.keys(categoryMap).map(key => ({
    name: key,
    value: categoryMap[key]
  }));

  const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28"];

  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>

      {}
      <div className="summary-cards">
        <div className="card">
          <h3>Balance</h3>
          <p>₹{balance}</p>
        </div>
        <div className="card">
          <h3>Income</h3>
          <p>₹{income}</p>
        </div>
        <div className="card">
          <h3>Expense</h3>
          <p>₹{expense}</p>
        </div>
      </div>

      {}
      <div className="charts">
        <div className="chart">
          <h3>Balance Trend</h3>
          <LineChart width={500} height={300} data={trendData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" />
          </LineChart>
        </div>
        <div className="chart">
          <h3>Spending Breakdown</h3>
          <PieChart width={400} height={300}>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
            >
              {categoryData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;