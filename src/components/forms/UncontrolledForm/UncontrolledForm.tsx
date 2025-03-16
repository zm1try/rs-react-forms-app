import { FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import { ValidationError } from 'yup';
import { FormFieldType, FormDataType } from '../../../types/types';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { clearErrors, setErrors } from '../../../store/validationErrorsSlice';
import { setFormValidation } from '../../../store/formSlice';
import { saveFormDataToStore } from '../../../utils/utils';
import { schema } from '../../../validators/formValidator';
import CustomUntypedInput from '../../controls/CustomUntypedInput/CustomUntypedInput';
import CustomDropdownSelect from '../../controls/CustomDropdownSelect/CustomDropdownSelect';
import { FIELDS_CONFIG, GENDER_LIST } from '../../../config/config';

const errorsInitialValue = {
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

export default function UncontrolledForm() {
  const dispatch = useAppDispatch();
  const isFormValid = useAppSelector((state) => state.form.isValid);
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget as HTMLFormElement);
    const formData: FormDataType = {
      name: form.get(FIELDS_CONFIG.NAME.name),
      age: form.get(FIELDS_CONFIG.AGE.name)
        ? Number(form.get(FIELDS_CONFIG.AGE.name))
        : null,
      email: form.get(FIELDS_CONFIG.EMAIL.name),
      password: form.get(FIELDS_CONFIG.PASSWORD.name),
      passwordConfirm: form.get(FIELDS_CONFIG.PASSWORD_CONFIRM.name),
      file: form.get(FIELDS_CONFIG.FILE.name),
      gender: form.get(FIELDS_CONFIG.GENDER.name),
      country: form.get(FIELDS_CONFIG.COUNTRY.name),
      acceptTerms: form.get(FIELDS_CONFIG.ACCEPT_TERMS.name),
    };

    validateForm(formData);
  };

  const validateForm = async (formData: FormDataType) => {
    try {
      await schema.validate(formData, { abortEarly: false });
      dispatch(setFormValidation(true));
      dispatch(clearErrors());
      saveFormDataToStore(formData, dispatch);
      navigate('/');
    } catch (error) {
      const validationErrors: Record<keyof typeof formData, string> = {
        ...errorsInitialValue,
      };

      if (error instanceof ValidationError) {
        error.inner.forEach((innerError) => {
          const errorPath = (innerError as { path: FormFieldType }).path;

          if (!validationErrors[errorPath]) {
            validationErrors[errorPath] = innerError.message;
          }
        });
      }

      dispatch(setErrors(validationErrors));
      dispatch(setFormValidation(false));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CustomUntypedInput
          label={FIELDS_CONFIG.NAME.label}
          name={FIELDS_CONFIG.NAME.name}
          id={FIELDS_CONFIG.NAME.id}
        />
        <CustomUntypedInput
          label={FIELDS_CONFIG.AGE.label}
          name={FIELDS_CONFIG.AGE.name}
          id={FIELDS_CONFIG.AGE.id}
          type="number"
        />
        <CustomUntypedInput
          label={FIELDS_CONFIG.EMAIL.label}
          name={FIELDS_CONFIG.EMAIL.name}
          id={FIELDS_CONFIG.EMAIL.id}
          type="email"
        />
        <CustomUntypedInput
          label={FIELDS_CONFIG.PASSWORD.label}
          name={FIELDS_CONFIG.PASSWORD.name}
          id={FIELDS_CONFIG.PASSWORD.id}
          type="password"
        />
        <CustomUntypedInput
          label={FIELDS_CONFIG.PASSWORD_CONFIRM.label}
          name={FIELDS_CONFIG.PASSWORD_CONFIRM.name}
          id={FIELDS_CONFIG.PASSWORD_CONFIRM.id}
          type="password"
        />
        <CustomDropdownSelect
          label={FIELDS_CONFIG.GENDER.label}
          name={FIELDS_CONFIG.GENDER.name}
          id={FIELDS_CONFIG.GENDER.id}
          defaultValue={GENDER_LIST[0]}
          options={GENDER_LIST}
        />
        <CustomUntypedInput
          label={FIELDS_CONFIG.FILE.label}
          name={FIELDS_CONFIG.FILE.name}
          id={FIELDS_CONFIG.FILE.id}
          type="file"
        />
        <CustomUntypedInput
          label={FIELDS_CONFIG.COUNTRY.label}
          name={FIELDS_CONFIG.COUNTRY.name}
          id={FIELDS_CONFIG.COUNTRY.id}
        />
        <CustomUntypedInput
          label={FIELDS_CONFIG.ACCEPT_TERMS.label}
          name={FIELDS_CONFIG.ACCEPT_TERMS.name}
          id={FIELDS_CONFIG.ACCEPT_TERMS.id}
          type="checkbox"
        />
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </>
  );
}
