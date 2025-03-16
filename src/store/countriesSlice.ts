import { createSlice } from '@reduxjs/toolkit';
import { COUNTRY_LIST } from '../config/config';

const countriesSlice = createSlice({
  name: 'countries',
  initialState: COUNTRY_LIST,
  reducers: {},
});

export default countriesSlice.reducer;
