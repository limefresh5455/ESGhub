// import React from 'react';

// const Table = () => (
//   <div>
//     <h3>Table Component</h3>
//     <p>This is where the table will be displayed.</p>
//   </div>
// );

// export default Table;

// Table.js
import React from 'react';

const Table = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 28, email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Smith', age: 34, email: 'janesmith@example.com' },
    { id: 3, name: 'Alice Johnson', age: 45, email: 'alicej@example.com' },
  ];

  return (
    <div className="p-4 bg-gray-50 rounded shadow">
      <h3 className="font-bold mb-2">User Table</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.age}</td>
              <td className="border p-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
