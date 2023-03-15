import { createSlice } from '@reduxjs/toolkit';

const playlistOptions = {
  "sunny" : '3tN3977yc2VTPFyyARQlAu',
  "cloudy" : "37i9dQZF1DX177vQ7mVRmP",
  "rainy" : "37i9dQZF1DWYuGZUE4XQXm",
  }

const initialState = {
  userName: 'Regina',
  type: 'Rainy',
  temp: 69,
  zipcode: 10001,
  city: 'New York City',
  url: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
  bg: "https://images.hdqwalls.com/wallpapers/sunny-fields.jpg",
  playlist: playlistOptions,
  authenticated: false,
  profile: {},
  LSContainer: 'login'
};

const stateSlice = createSlice({
  name: 'updater',
  initialState,
  reducers: {
    updateAll: (state, action) => {
      state.type = action.payload.type;
      state.temp = action.payload.temp;
      state.zipcode = action.payload.zip;
      state.city = action.payload.city;
      state.url = action.payload.url;
      state.bg = action.payload.bg;
    },
    updatePlaylist: (state, action) =>  {
      state.playlist = action.payload;
    },
    updateUser: (state, action) =>  {
      state.userName = action.payload;
    },
    updateType: (state, action) => {
      state.type = action.payload;
    },
    updateTemp: (state, action) => {
      state.temp = action.payload;
    },
    updateZipcode: (state, action) => {
      state.zipcode = action.payload;
    },
    updateCity: (state, action) => {
      state.city = action.payload;
    },
    updateUrl: (state, action) => {
      state.url = action.payload;
    },
    updateAuthenticated: (state, action) => {
      state.authenticated = action.payload;
    },
    updateProfile: (state, action) => {
      state.profile = action.payload;
    },
    updateLSContainer: (state, action) => {
      state.LSContainer = action.payload;
    }
  }
});

export const { updateType,
  updateTemp,
  updateZipcode,
  updateCity,
  updateUrl,
  updateAll,
  updateUser,
  updatePlaylist,
  updateAuthenticated,
  updateProfile,
  updateLSContainer
} =
  stateSlice.actions;
export default stateSlice.reducer;
