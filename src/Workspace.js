// import React, { useState } from 'react';
// import { useDrop } from 'react-dnd';
// import Graph from './Graph';
// import Table from './Table';
// import Chat from './Chat';

// const Workspace = () => {
//   const [droppedItems, setDroppedItems] = useState([]);

//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: ['graph', 'table', 'chat'],
//     drop: (item) => addComponent(item.type),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }));

//   const addComponent = (type) => {
//     setDroppedItems((prevItems) => [...prevItems, type]);
//   };

//   return (
//     <div
//       ref={drop}
//       className={`flex-1 p-4 ${
//         isOver ? 'bg-green-100' : 'bg-gray-100'
//       } transition-all`}
//     >
//       <h2 className="text-lg font-bold mb-4">Workspace</h2>
//       {droppedItems.map((item, index) => (
//         <div key={index} className="mb-4 p-4 bg-white shadow rounded">
//           {item === 'graph' && <Graph />}
//           {item === 'table' && <Table />}
//           {item === 'chat' && <Chat />}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Workspace;
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { Rnd } from 'react-rnd';
import Graph from './Graph';
import Table from './Table';
import Chat from './Chat';

const Workspace = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ['graph', 'table', 'chat'],
    drop: (item) => addComponent(item.type),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addComponent = (type) => {
    setDroppedItems((prevItems) => [...prevItems, type]);
  };

  return (
    <div
      ref={drop}
      className={`flex-1 p-4 ${
        isOver ? 'bg-green-100' : 'bg-gray-100'
      } transition-all relative`}
    >
      <h2 className="text-lg font-bold mb-4">Workspace</h2>
      {droppedItems.map((item, index) => (
        <Rnd
          key={index}
          default={{
            x: 50 + index * 20,
            y: 50 + index * 20,
            width: 300,
            height: 200,
          }}
          bounds="parent"
          minWidth={200}
          minHeight={150}
          className="bg-white shadow-lg p-4 rounded border border-gray-300"
        >
          {item === 'graph' && <Graph />}
          {item === 'table' && <Table />}
          {item === 'chat' && <Chat />}
        </Rnd>
      ))}
    </div>
  );
};

export default Workspace;
