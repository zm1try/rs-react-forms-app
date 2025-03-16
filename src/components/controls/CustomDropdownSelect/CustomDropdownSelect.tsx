import { forwardRef } from 'react';
import { setFormValidation } from '../../../store/formSlice';
import { clearErrors } from '../../../store/validationErrorsSlice';
import { useAppDispatch } from '../../../store/hooks';

interface CustomDropdownSelectProps {
  options: string[];
  id: string;
  name: string;
  defaultValue: string;
  label: string;
}

const CustomDropdownSelect = forwardRef<
  HTMLSelectElement,
  CustomDropdownSelectProps
>(({ options, id, name, defaultValue, label }, ref) => {
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(clearErrors());
    dispatch(setFormValidation(true));
  };

  return (
    <>
      <label htmlFor={id}>
        {label}
        <select
          ref={ref}
          name={name}
          id={id}
          defaultValue={defaultValue}
          onChange={handleChange}
        >
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </>
  );
});

CustomDropdownSelect.displayName = 'CustomDropdownSelect';
export default CustomDropdownSelect;
