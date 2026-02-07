// src/SimpleGrid.jsx
import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default function SimpleGrid() {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 }
  ]);

  const [colDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" }
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 200, width: 500 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        suppressDragLeaveHidesColumns={true}
        suppressMovableColumns={true}
      />
    </div>
  );
}