import React from 'react';
import { useDrag } from 'react-dnd';

const options = [
  { id: 1, type: 'graph', label: 'Graph' },
  { id: 2, type: 'table', label: 'Table' },
  { id: 3, type: 'chat', label: 'Chats' },
];

const Sidebar = () => {
  return (
    <div className="w-1/4 p-4 bg-gray-200">
      <h2 className="text-lg font-bold mb-4">Dashboard Options</h2>
      {options.map(option => (
        <SidebarItem key={option.id} option={option} />
      ))}
    </div>
  );
};

const SidebarItem = ({ option }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: option.type,
    item: { type: option.type },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-2 mb-2 bg-white rounded shadow ${
        isDragging ? 'opacity-50' : 'opacity-100'
      } cursor-pointer`}
    >
      {option.label}
    </div>
  );
};

export default Sidebar;
