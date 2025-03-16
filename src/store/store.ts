import { configureStore } from '@reduxjs/toolkit';
import validationErrorsReducer from './validationErrorsSlice';
import countriesSlice from './countriesSlice';
import formSliceReducer from './formSlice';

export const store = configureStore({
  reducer: {
    errors: validationErrorsReducer,
    countries: countriesSlice,
    form: formSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
