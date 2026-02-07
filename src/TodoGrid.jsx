// TodoGrid.jsx
import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

function TodoGrid() {
  const [todos] = useState([
    { task: 'Task 1', priority: 'High', done: false },
    { task: 'Task 2', priority: 'Medium', done: true },
    { task: 'Task 3', priority: 'Low', done: false }
  ]);

  const [columns] = useState([
    { field: 'task' },
    { field: 'priority' },
    { field: 'done' }
  ]);

  return (
    <div style={{ height: 300, width: 500 }}>
      <AgGridReact
        rowData={todos}
        columnDefs={columns}
        suppressDragLeaveHidesColumns={true}
        suppressMovableColumns={true}
      />
    </div>
  );
}

export default TodoGrid;