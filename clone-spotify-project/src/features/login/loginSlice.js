import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './loginAPI';
import {reducerCases} from '../../utils/Constants';

const initialState = {
  token: null,
 
};


export const incrementAsync = createAsyncThunk(
  'login',
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
        case reducerCases.SET_TOKEN:{
          return {
          ...state,
          token: action.token,
        };}
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
