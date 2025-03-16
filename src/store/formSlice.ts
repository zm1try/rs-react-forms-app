import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormDataType } from '../types/types';

interface IInitialState {
  isValid: boolean;
  highlightLastAddedFlag: boolean;
  formData: FormDataType[];
}

const initialState: IInitialState = {
  isValid: true,
  highlightLastAddedFlag: false,
  formData: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData(state, action: PayloadAction<FormDataType>) {
      state.formData.unshift(action.payload);
    },
    setFormValidation(state, action: PayloadAction<boolean>) {
      state.isValid = action.payload;
    },
    setHighlightLastAddedFlag(state, action: PayloadAction<boolean>) {
      state.highlightLastAddedFlag = action.payload;
    },
  },
});

export const { setFormData, setFormValidation, setHighlightLastAddedFlag } =
  formSlice.actions;
export default formSlice.reducer;
