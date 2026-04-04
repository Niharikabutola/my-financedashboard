import React, { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import "./App.css";

function AppContent() {
  const { isDark, toggleTheme } = useTheme();

  const [role, setRole] = useState("viewer");

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);


  React.useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
   
      setTimeout(() => {
        setTransactions([
          { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
          { id: 2, date: "2026-04-02", amount: 200, category: "Food", type: "expense" },
          { id: 3, date: "2026-04-03", amount: 1000, category: "Shopping", type: "expense" }
        ]);
        setLoading(false);
      }, 1000);
    };
    fetchTransactions();
  }, []);


  const handleAddTransaction = (newTrans) => {
    setTransactions([...transactions, newTrans]);
  };

  const handleEditTransaction = (id) => {
    
    const updated = transactions.map(t => t.id === id ? { ...t, amount: t.amount + 10 } : t);
    setTransactions(updated);
  };

  const handleExportCSV = () => {
    const csv = transactions.map(t => `${t.date},${t.amount},${t.category},${t.type}`).join('\n');
    const blob = new Blob([`Date,Amount,Category,Type\n${csv}`], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transactions.csv';
    a.click();
  };

  if (loading) {
    return <div className="app">Loading...</div>;
  }

  return (
    <div className="app">
      <h1>Financial Dashboard</h1>

      {}
      <button onClick={toggleTheme} className="theme-toggle">
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>

      {}
      <button onClick={handleExportCSV} className="export-btn">
        Export CSV
      </button>

      {/* Role Switch */}
      <div className="role-switch">
        <label>Role: </label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>
     
      <Dashboard transactions={transactions} />

      <Transactions 
        transactions={transactions} 
        role={role} 
        onAddTransaction={handleAddTransaction} 
        onEditTransaction={handleEditTransaction} 
      />

      <Insights transactions={transactions} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;