import { createSlice } from '@reduxjs/toolkit';
import { getCampers, getCamperById } from './operations';

const INITIAL_STATE = {
  campers: [],
  camper: null,
  error: null,
  isLoading: false,
};

export const campersSlice = createSlice({
  name: 'campers',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      .addCase(getCampers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.campers = action.payload;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getCamperById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.camper = action.payload;
      })
      .addCase(getCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
