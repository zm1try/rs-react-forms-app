import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import FormDataItem from '../FormDataItem/FormDataItem';
import { setHighlightLastAddedFlag } from '../../../store/formSlice';
import { useEffect } from 'react';

export default function FormData() {
  const formData = useAppSelector((state) => state.form.formData);
  const highlightLastAddedFlag = useAppSelector(
    (state) => state.form.highlightLastAddedFlag
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (highlightLastAddedFlag) {
      setTimeout(() => {
        dispatch(setHighlightLastAddedFlag(false));
      }, 5000);
    }
  }, [dispatch, highlightLastAddedFlag]);

  return (
    <>
      <div
        className={`form-data-container ${highlightLastAddedFlag ? 'highlight' : ''}`}
      >
        {formData.length
          ? formData.map((formDataItem, i) => (
              <FormDataItem data={formDataItem} key={i} />
            ))
          : null}
      </div>
    </>
  );
}
