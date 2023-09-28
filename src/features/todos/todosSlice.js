import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import todosHTTP from "../../services/todoService";

const initialState = { todos: [], status: "idle", error: null };

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const response = await todosHTTP.getAll();
    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export const addTodo = createAsyncThunk(
  "todos/addTodos",
  async (initialState) => {
    try {
      const response = await todosHTTP.create(initialState);
      return response.data;
    } catch (e) {
      return e.message;
    }
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.error.message);
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      });
  },
});

export default todosSlice.reducer;
