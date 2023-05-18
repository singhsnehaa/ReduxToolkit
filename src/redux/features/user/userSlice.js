import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import userService from './userService';

export const getUserList = createAsyncThunk('user/getUserList', async () => {
  try {
    const response = await userService.userList();
    return response.users;
  } catch (error) {
    return 'Something Went wrong';
  }
});

export const deleteUser = createAsyncThunk('user/deleteUser', async userId => {
  try {
    const response = await userService.deleteUser(userId);
    return response;
  } catch (error) {
    return 'Something Went wrong';
  }
});

export const singleUser = createAsyncThunk('user/singleUser', async userId => {
  try {
    const response = await userService.singleUser(userId);
    console.log('action responce===>', response.users);
    return response;
  } catch (error) {
    return 'Something Went wrong';
  }
});

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({userId, body}) => {
    try {
      const response = await userService.updateUser(userId, body);
      return response;
    } catch (error) {
      return 'Something Went wrong';
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  //   initialState: [
  //     {Id: 1, name: 'sneha'},
  //     {Id: 1, name: 'sneha'},
  //   ],
  initialState: {
    userResponce: [],
    isLoading: false,
    message: '',

    userDetailsResponce: {},
  },

  reducers: {
    // getUserList: (state, action) => {
    //   console.log('hhiii');
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(getUserList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userResponce = action.payload;
      })
      .addCase(getUserList.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userResponce = state.userResponce.filter(
          item => item.id !== action.payload.id,
        );
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(singleUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(singleUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userDetailsResponce = action.payload;
      })
      .addCase(singleUser.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userResponce = state.userResponce.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              firstName: action.payload.firstName,
              phone: action.payload.phone,
              email: action.payload.email,
              password: action.payload.password,
            };
          } else {
            return item;
          }
        });
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

// export const {getUserList} = userSlice.actions;
export default userSlice.reducer;
