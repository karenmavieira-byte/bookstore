// src/GridTest.jsx
import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

// IMPORT CSS - This is crucial!
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function GridTest() {
  // Sample data
  const [rowData] = useState([
    { name: "Toyota", type: "Car", year: 2020 },
    { name: "Ford", type: "Truck", year: 2019 },
    { name: "Honda", type: "Car", year: 2021 },
    { name: "BMW", type: "Car", year: 2022 },
  ]);

  // Column definitions
  const [colDefs] = useState([
    { field: "name", headerName: "Vehicle Name" },
    { field: "type", headerName: "Type" },
    { field: "year", headerName: "Year" },
  ]);

  return (
    <div style={{ margin: "20px" }}>
      <h3>Test Grid - Columns Cannot Be Dragged</h3>
      <p>Try to drag column headers (they should not move)</p>
      
      {/* Grid container with fixed size */}
      <div 
        className="ag-theme-alpine" 
        style={{ 
          height: "300px", 
          width: "600px",
          margin: "20px auto",
          border: "2px solid blue" // Temporary border to see the container
        }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          // THE IMPORTANT PROPS FOR THE ASSIGNMENT:
          suppressDragLeaveHidesColumns={true}
          suppressMovableColumns={true}
        />
      </div>
      
      <p><strong>Assignment completed:</strong> Column dragging disabled</p>
    </div>
  );
}

export default GridTest;