import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './loginAPI';

const initialState = {
  token: null,
 
};


export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    reducer: (state, action) => {
      switch(action.type) {
        default:
          return state;
      }
    },
  },
  extraReducers: (builder) => {
    
    
  },
});

export const { reducer } = loginSlice.actions;

export default loginSlice.reducer;
