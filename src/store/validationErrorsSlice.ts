import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormErrorsType } from '../types/types';

const initialState: FormErrorsType = {
  name: '',
  age: '',
  email: '',
  password: '',
  passwordConfirm: '',
  file: '',
  gender: '',
  country: '',
  acceptTerms: '',
};

const validationErrorsSlice = createSlice({
  name: 'validationErrors',
  initialState,
  reducers: {
    setErrors(_, action: PayloadAction<typeof initialState>) {
      return action.payload;
    },
    clearErrors() {
      return initialState;
    },
  },
});

export const { setErrors, clearErrors } = validationErrorsSlice.actions;
export default validationErrorsSlice.reducer;
