import {createSlice} from '@reduxjs/toolkit';

export const catSlice = createSlice({
  name: 'cats',

  initialState: {
    cats: [],
    isLoading: false,
  },
  reducers: {
    getCatsFetch: state => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      (state.cats = action.payload), (state.isLoading = false);
    },
    getCatsError: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {getCatsSuccess, getCatsError, getCatsFetch} = catSlice.actions;
export default catSlice.reducer;
