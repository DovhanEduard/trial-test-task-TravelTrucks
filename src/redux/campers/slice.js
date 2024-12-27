import { createSlice } from '@reduxjs/toolkit';
import { getCampers, getFilteredCampers, getCamperById } from './operations';

const INITIAL_STATE = {
  campers: [],
  totalCampers: 0,
  filters: {},
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
        state.totalCampers = action.payload.total;
        state.campers = [...state.campers, ...action.payload.items];
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getFilteredCampers.pending, state => {
        state.filters = {};
        state.campers = [];
        state.totalCampers = 0;
        state.isLoading = true;
      })
      .addCase(getFilteredCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.totalCampers = action.payload.total;

        state.campers = action.payload.items;
        state.filters = action.payload.parsedFilterParams;
      })
      .addCase(getFilteredCampers.rejected, (state, action) => {
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
