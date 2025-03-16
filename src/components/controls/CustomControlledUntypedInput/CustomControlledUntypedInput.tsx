import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { FormFieldType } from '../../../types/types';
import { useAppSelector } from '../../../store/hooks';
import { ControlledForm } from '../../forms/ControlledForm/ControlledForm';
import PasswordStrengthCaption from '../../utils/PasswordStrengthCaption/PasswordStrengthCaption';
import { COUNTRY_LIST_ID, FIELDS_CONFIG } from '../../../config/config';

interface CustomControlledUntypedInputProps {
  label: string;
  type?: string;
  name: FormFieldType;
  register: UseFormRegister<ControlledForm>;
  errors: FieldErrors<ControlledForm>;
  watch?: UseFormWatch<ControlledForm>;
}

export default function CustomControlledUntypedInput({
  type = 'text',
  label,
  name,
  register,
  errors,
  watch,
}: CustomControlledUntypedInputProps) {
  const countries = useAppSelector((state) => state.countries);
  const idForList = name === FIELDS_CONFIG.COUNTRY.name ? COUNTRY_LIST_ID : '';

  return (
    <>
      <label>
        {label}
        <input type={type} {...register(name)} list={idForList} />
        <div>
          {name === FIELDS_CONFIG.PASSWORD.name && watch && (
            <PasswordStrengthCaption
              passwordValue={
                (watch(FIELDS_CONFIG.PASSWORD.name) as string) ?? ''
              }
            />
          )}
        </div>
        {name === FIELDS_CONFIG.COUNTRY.name && (
          <datalist id={COUNTRY_LIST_ID}>
            {countries.map((country) => (
              <option key={country} value={country}></option>
            ))}
          </datalist>
        )}
        {errors[name] && <p>{errors[name].message}</p>}
      </label>
    </>
  );
}
