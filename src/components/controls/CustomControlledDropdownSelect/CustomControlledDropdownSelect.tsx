import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFieldType } from '../../../types/types';
import { ControlledForm } from '../../forms/ControlledForm/ControlledForm';
import { GENDER_LIST } from '../../../config/config';

interface CustomControlledDropdownSelectProps {
  label: string;
  name: FormFieldType;
  register: UseFormRegister<ControlledForm>;
  errors: FieldErrors<ControlledForm>;
}

export default function CustomControlledDropdownSelect({
  label,
  name,
  register,
  errors,
}: CustomControlledDropdownSelectProps) {
  return (
    <>
      <label>
        {label}
        <select {...register(name)}>
          {GENDER_LIST.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
        {errors[name] && <p>{errors[name].message}</p>}
      </label>
    </>
  );
}
