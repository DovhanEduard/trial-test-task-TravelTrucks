import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { parseFilterData } from '../../utils/parsFilterParams';

export const instance = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/',
});

export const getCampers = createAsyncThunk(
  'campers/getCampers',
  async ({ page = 1, limit = 4 }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const filters = state.campers.filters;

      const { data } = await instance.get(
        `/campers?limit=${limit}&page=${page}`,
        { params: { ...filters } }
      );

      return data;
    } catch (error) {
      if (error.response) {
        const status = error.response.data.status;
        const message =
          error.response.data.message || 'Unexpected error occurred';
        return thunkAPI.rejectWithValue({ status, message });
      } else {
        return thunkAPI.rejectWithValue({
          status: 0,
          message: 'Network error. Please try again.',
        });
      }
    }
  }
);

export const getFilteredCampers = createAsyncThunk(
  'campers/getFilteredCampers',
  async ({ page = 1, limit = 4, fromData = {} }, thunkAPI) => {
    try {
      const parsedFilterParams = parseFilterData(fromData);

      const { data } = await instance.get(
        `/campers?limit=${limit}&page=${page}`,
        { params: { ...parsedFilterParams } }
      );

      return { ...data, parsedFilterParams };
    } catch (error) {
      if (error.response) {
        const status = error.response.data.status;
        const message =
          error.response.data.message || 'Unexpected error occurred';
        return thunkAPI.rejectWithValue({ status, message });
      } else {
        return thunkAPI.rejectWithValue({
          status: 0,
          message: 'Network error. Please try again.',
        });
      }
    }
  }
);

export const getCamperById = createAsyncThunk(
  'campers/getCamperById',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.get(`/campers/${id}`);

      return data;
    } catch (error) {
      if (error.response) {
        const status = error.response.data.status;
        const message =
          error.response.data.message || 'Unexpected error occurred';
        return thunkAPI.rejectWithValue({ status, message });
      } else {
        return thunkAPI.rejectWithValue({
          status: 0,
          message: 'Network error. Please try again.',
        });
      }
    }
  }
);
