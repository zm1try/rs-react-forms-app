import { useEffect, useRef, useState } from 'react';
import { FormFieldType } from '../../../types/types';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { clearErrors } from '../../../store/validationErrorsSlice';
import { setFormValidation } from '../../../store/formSlice';
import PasswordStrengthCaption from '../../utils/PasswordStrengthCaption/PasswordStrengthCaption';
import { COUNTRY_LIST_ID, FIELDS_CONFIG } from '../../../config/config';

interface InputProps {
  name: FormFieldType;
  id: string;
  label: string;
  type?: string;
}

export default function CustomUntypedInput({
  name,
  id,
  label,
  type = 'text',
}: InputProps) {
  const countries = useAppSelector((state) => state.countries);
  const errors = useAppSelector((state) => state.errors);
  const dispatch = useAppDispatch();
  const inputRefWhichWillBeUsedOnlyForPasswordStrengthCaptionGeneration =
    useRef<HTMLInputElement>(null);
  const [
    passwordValueOnlyForStrengthCaption,
    setPasswordValueOnlyForStrengthCaption,
  ] = useState('');
  const idForList = name === FIELDS_CONFIG.COUNTRY.name ? COUNTRY_LIST_ID : '';

  useEffect(() => {
    if (
      id === FIELDS_CONFIG.PASSWORD.id &&
      inputRefWhichWillBeUsedOnlyForPasswordStrengthCaptionGeneration?.current
    ) {
      setPasswordValueOnlyForStrengthCaption(
        inputRefWhichWillBeUsedOnlyForPasswordStrengthCaptionGeneration.current
          .value
      );
    }
  }, [id, inputRefWhichWillBeUsedOnlyForPasswordStrengthCaptionGeneration]);

  useEffect(() => {
    dispatch(setFormValidation(true));
    dispatch(clearErrors());
  }, [dispatch]);

  const datalist =
    name === FIELDS_CONFIG.COUNTRY.name ? (
      <datalist id={COUNTRY_LIST_ID}>
        {countries.map((country) => (
          <option key={country} value={country}></option>
        ))}
      </datalist>
    ) : null;

  const handleChange = () => {
    dispatch(clearErrors());
    dispatch(setFormValidation(true));

    if (
      id === FIELDS_CONFIG.PASSWORD.id &&
      inputRefWhichWillBeUsedOnlyForPasswordStrengthCaptionGeneration?.current
    ) {
      setPasswordValueOnlyForStrengthCaption(
        inputRefWhichWillBeUsedOnlyForPasswordStrengthCaptionGeneration.current
          .value
      );
    }
  };

  return (
    <>
      <label htmlFor={id}>
        {label}
        <input
          list={idForList}
          type={type}
          name={name}
          id={id}
          onChange={handleChange}
          ref={inputRefWhichWillBeUsedOnlyForPasswordStrengthCaptionGeneration}
        />
        {datalist}
        <div>
          {id === FIELDS_CONFIG.PASSWORD.id && (
            <PasswordStrengthCaption
              passwordValue={passwordValueOnlyForStrengthCaption}
            />
          )}
        </div>
        {errors[name] && <p>{errors[name]}</p>}
      </label>
    </>
  );
}
