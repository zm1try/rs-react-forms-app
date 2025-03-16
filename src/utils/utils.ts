import { setFormData, setHighlightLastAddedFlag } from '../store/formSlice';
import { AppDispatch } from '../store/store';
import { FormDataType } from '../types/types';

export function saveFormDataToStore(
  formData: FormDataType,
  dispatch: AppDispatch
) {
  const reader = new FileReader();
  reader.readAsDataURL(formData.file as File);
  reader.onload = () => {
    const base64Img = reader.result as string;
    dispatch(setFormData({ ...formData, file: base64Img }));
    dispatch(setHighlightLastAddedFlag(true));
  };
}
