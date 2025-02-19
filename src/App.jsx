import React, { useState, useEffect } from 'react';

function App() {
  const [balance, setBalance] = useState(0);
  const [transaction, setTransaction] = useState('');

  useEffect(() => {
    const storedBalance = localStorage.getItem('balance');
    if (storedBalance) {
      setBalance(parseInt(storedBalance, 10));
    }
  }, []);

  const handleTransaction = () => {
    const amount = parseInt(transaction, 10);
    if (!isNaN(amount)) {
      setBalance(balance + amount);
      localStorage.setItem('balance', balance + amount);
      setTransaction('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Simple DApp</h1>
      <p className="mb-4">Balance: {balance}</p>
      <input
        type="number"
        value={transaction}
        onChange={(e) => setTransaction(e.target.value)}
        className="border border-gray-300 px-3 py-2 rounded mb-2"
        placeholder="Enter transaction amount"
      />
      <button
        onClick={handleTransaction}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Transaction
      </button>
    </div>
  );
}

export default App;
