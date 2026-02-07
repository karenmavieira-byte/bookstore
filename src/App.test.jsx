import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

vi.mock("@mui/x-data-grid", () => ({
  DataGrid: () => <div>DataGrid</div>
}));

test("add todo and clear", () => {
  render(<App />);

  const descInput = screen.getByLabelText(/description/i);
  const dateInput = screen.getByLabelText(/date/i);

  fireEvent.change(descInput, { target: { value: "Test todo" } });
  fireEvent.change(dateInput, { target: { value: "10.10.2022" } });

  fireEvent.click(screen.getByText(/add/i));

  // Inputs reset after add
  expect(descInput.value).toBe("");
  expect(dateInput.value).toBe("");

  fireEvent.click(screen.getByText(/clear/i));

  // After clear, datagrid still exists (no crash)
  expect(screen.getByText("DataGrid")).toBeInTheDocument();
});