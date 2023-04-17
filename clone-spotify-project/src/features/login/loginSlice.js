import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './loginAPI';
import {reducerCases} from '../../utils/Constants';

const initialState = {
  token: null,
  playlists:[],
  userInfo: null,
};


// export const incrementAsync = createAsyncThunk(
//   'login',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    getToken: (state, action) => {
      state.token=action.payload;
    },
    getPlaylists:(state, action) => {
      state.playlists = action.payload;
    },
    getUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    
  },
  extraReducers: (builder) => {
    
    
  },
});

export const { getToken, getPlaylists, getUserInfo } = loginSlice.actions;

export default loginSlice.reducer;
