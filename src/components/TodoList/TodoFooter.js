import React from 'react';

const TodoFooter = ({ todosCount, clearAll }) => {
  return (
    <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
      <span>{todosCount} items</span>
      <button
        onClick={clearAll}
        className="text-gray-500 hover:text-gray-700"
      >
        Clear All
      </button>
    </div>
  );
};

export default TodoFooter;