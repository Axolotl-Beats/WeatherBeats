import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: 'Regina',
  type: 'Rainy',
  temp: 69,
  zipcode: 10001,
  city: 'New York City',
  url: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
  // bg: url'.client/assets/image/sunny'
};

const stateSlice = createSlice({
  name: 'updater',
  initialState,
  reducers: {
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
    }
  }
});

export const { updateType, updateTemp, updateZipcode, updateCity, updateUrl } =
  stateSlice.actions;
export default stateSlice.reducer;
