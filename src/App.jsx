import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Container,
  Box
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
import SaveIcon from "@mui/icons-material/Save";

function App() {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const [todos, setTodos] = useState([
    { id: new Date(), desc: "Go to coffee", date: "1.3.2022" },
    { id: new Date() + 1, desc: "React training", date: "5.3.2022" }
  ]);

  const addTodo = () => {
    if (!desc || !date) return;

    const newTodo = {
      id: new Date(),
      desc: desc,
      date: date
    };

    setTodos([...todos, newTodo]);
    setDesc("");
    setDate("");
  };

  // NEW CLEAR FUNCTION
  const clearTodos = () => {
    setTodos([]);
  };

  const columns = [
    { field: "desc", headerName: "Description", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 }
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Todolist</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Box sx={{ display: "flex", gap: 3, alignItems: "center", mb: 3 }}>
          <TextField
            variant="standard"
            label="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <TextField
            variant="standard"
            label="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <Button variant="outlined" startIcon={<SaveIcon />} onClick={addTodo}>
            ADD
          </Button>

          {/* CLEAR BUTTON */}
          <Button variant="outlined" color="error" onClick={clearTodos}>
            CLEAR
          </Button>
        </Box>

        <div style={{ height: 300, width: "100%" }}>
          <DataGrid
            rows={todos}
            columns={columns}
            pageSize={100}
            rowsPerPageOptions={[100]}
            getRowId={(row) => row.id}
          />
        </div>
      </Container>
    </>
  );
}

export default App;