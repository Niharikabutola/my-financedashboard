import React, { useState } from "react";
import "./Transactions.css";

function Transactions({ transactions, role, onAddTransaction, onEditTransaction }) {
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [search, setSearch] = useState("");

  // Filter and sort transactions
  let filteredTransactions = transactions.filter(t => {
    if (filterType !== "all" && t.type !== filterType) return false;
    if (filterCategory && t.category.toLowerCase() !== filterCategory.toLowerCase()) return false;
    if (search && !t.category.toLowerCase().includes(search.toLowerCase()) && !t.amount.toString().includes(search)) return false;
    return true;
  });

  filteredTransactions.sort((a, b) => {
    let aVal, bVal;
    if (sortBy === "date") {
      aVal = new Date(a.date);
      bVal = new Date(b.date);
    } else if (sortBy === "amount") {
      aVal = a.amount;
      bVal = b.amount;
    }
    if (sortOrder === "asc") return aVal - bVal;
    return bVal - aVal;
  });

  const handleAdd = () => {

    const newTrans = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      amount: 100,
      category: "New",
      type: "expense"
    };
    onAddTransaction(newTrans);
  };

  return (
    <div className="transactions">
      <h2>Transactions</h2>
      <div className="filters">
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="all">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="text"
          placeholder="Filter by category"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>
        <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
          {sortOrder === "asc" ? "↑" : "↓"}
        </button>
        {role === "admin" && <button onClick={handleAdd}>Add Transaction</button>}
      </div>
      <div className="transaction-list">
        {filteredTransactions.length === 0 ? (
          <p>No transactions found.</p>
        ) : (
          filteredTransactions.map(t => (
            <div key={t.id} className="transaction-item">
              <span>{t.date}</span>
              <span>{t.category}</span>
              <span className={t.type}>{t.type}</span>
              <span>₹{t.amount}</span>
              {role === "admin" && <button onClick={() => onEditTransaction(t.id)}>Edit</button>}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Transactions;