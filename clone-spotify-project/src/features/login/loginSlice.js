import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './loginAPI';
import {reducerCases} from '../../utils/Constants';

const initialState = {
  token: null,
  playlists:[],
  userInfo: null,
  selectedPlaylistId: "3YIBiCbLeRgroP77Lkxqa6",
  selectedPlaylist: null,
  currentlyPlaying: null,
  playerState: false,

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
    getInitialPlaylist: (state, action) => {
      state.selectedPlaylist = action.payload;
    },
    getCurrentTrack: (state, action) => {
      state.currentlyPlaying = action.payload;
    },
    getPlayerState: (state, action) => {
      state.playerState = action.payload;
    }
    
  },
  extraReducers: (builder) => {
    
    
  },
});

export const { 
  getToken, 
  getPlaylists, 
  getUserInfo, 
  getInitialPlaylist,
  getCurrentTrack,
  getPlayerState } = loginSlice.actions;

export default loginSlice.reducer;
