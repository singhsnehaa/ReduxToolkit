import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import todoService from './todoService';

export const getTodos = createAsyncThunk('todo/getTodos', async () => {
  try {
    const response = await todoService.getAllTodos();
    return response.todos;
  } catch (error) {
    return 'Something Went wrong';
  }
});

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async todoId => {
  try {
    const response = await todoService.deleteTodo(todoId);
    console.log('response action=>', response);
    return response;
  } catch (error) {
    return 'Something Went wrong';
  }
});

export const addTodo = createAsyncThunk('todo/addTodo', async body => {
  try {
    const response = await todoService.addTodo(body);
    console.log('response action=>', response);
    return response;
  } catch (error) {
    return 'Something Went wrong';
  }
});

export const updateTodos = createAsyncThunk(
  'todo/updateTodos',
  async (todoId, thunkApi) => {
    const {completed} = thunkApi
      .getState()
      .todos.todoResponse.find(todo => todo.id === todoId);
    const data = {completed: !completed};
    try {
      const response = await todoService.updateTodo(todoId, data);
      return response;
    } catch (error) {
      return 'Something Went wrong';
    }
  },
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoResponse: [],
    isLoading: false,
    message: '',
  },
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getTodos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todoResponse = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteTodo.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todoResponse = state.todoResponse.filter(
          todo => todo.id !== action.payload.id,
        );
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(addTodo.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todoResponse.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(updateTodos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateTodos.fulfilled, (state, action) => {
        state.isLoading = false;

        state.todoResponse = state.todoResponse.map(todo => {
          if (todo.id == action.payload.id) {
            return {...todo, completed: action.payload.completed};
          } else {
            return todo;
          }
        });
      })
      .addCase(updateTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

// export const {deleteTodo, addTodo, toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;
