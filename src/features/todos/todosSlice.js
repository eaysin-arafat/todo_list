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

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ id, data }) => {
    const response = await todosHTTP.update(id, data);
    return response.data;
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
    // .addCase(updateTodo.fulfilled, (state, action) => {
    //   const index = state.todos.findIndex(
    //     (todo) => todo.id === action.payload.id
    //   );
    //   console.log(index);
    //   console.log(action.payload);
    //   // if (index !== -1) {
    //   //   state.todos.todos[index] = {
    //   //     ...state.todos.todos[index],
    //   //     ...action.payload,
    //   //   };
    //   // }
    // });
  },
});

// export const { isComplated } = todosSlice.actions;
export default todosSlice.reducer;
