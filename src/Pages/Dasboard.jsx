import React from 'react'
export default function Dashboard({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  const categories = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + Number(e.amount);
    return acc;
  }, {});

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="bg-blue-100 p-4 rounded shadow">
        <h2 className="font-bold text-lg">Total Spent</h2>
        <p className="text-2xl">₹{total}</p>
      </div>
      {Object.entries(categories).map(([cat, amt]) => (
        <div key={cat} className="bg-green-100 p-4 rounded shadow">
          <h3 className="font-semibold">{cat}</h3>
          <p>₹{amt}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;