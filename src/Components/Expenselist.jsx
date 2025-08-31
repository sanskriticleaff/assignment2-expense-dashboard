// src/components/ExpenseList.jsx
export default function ExpenseList({ expenses, onDelete, onEdit }) {
  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  return (
    <div className="mt-4">
      <h2 className="font-bold text-lg mb-2">Expenses</h2>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Title</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Category</th>
            <th className="p-2">Date</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e, idx) => (
            <tr key={idx} className="border-t">
              <td className="p-2">{e.title}</td>
              <td className="p-2">₹{e.amount}</td>
              <td className="p-2">{e.category}</td>
              <td className="p-2">{e.date}</td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => onEdit(e)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(e)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr className="font-bold bg-gray-100">
            <td className="p-2" colSpan="5">
              Total: ₹{total}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
