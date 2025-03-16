import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store/hooks';
import { saveFormDataToStore } from '../../../utils/utils';
import { controlledFormSchema } from '../../../validators/formValidator';
import CustomControlledDropdownSelect from '../../controls/CustomControlledDropdownSelect/CustomControlledDropdownSelect';
import { FIELDS_CONFIG } from '../../../config/config';
import CustomControlledUntypedInput from '../../controls/CustomControlledUntypedInput/CustomControlledUntypedInput';

export interface ControlledForm {
  name: string;
  age: number;
  email: string;
  gender: string;
  password: string;
  passwordConfirm: string;
  file: FileList;
  country: string;
  acceptTerms: boolean;
}

export default function ControlledForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    trigger,
  } = useForm<ControlledForm>({
    mode: 'onChange',
    resolver: yupResolver(controlledFormSchema),
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const password = watch(FIELDS_CONFIG.PASSWORD.name);

  useEffect(() => {
    if (password) {
      trigger(FIELDS_CONFIG.PASSWORD_CONFIRM.name);
    }
  }, [password, trigger]);

  const onSubmit: SubmitHandler<ControlledForm> = (data) => {
    const formData = {
      name: data.name,
      age: data.age,
      email: data.email,
      gender: data.gender,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
      file: data.file[0],
      country: data.country,
      acceptTerms: data.acceptTerms,
    };
    saveFormDataToStore(formData, dispatch);
    navigate('/');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomControlledUntypedInput
          label={FIELDS_CONFIG.NAME.label}
          name={FIELDS_CONFIG.NAME.name}
          register={register}
          errors={errors}
        />
        <CustomControlledUntypedInput
          label={FIELDS_CONFIG.AGE.label}
          name={FIELDS_CONFIG.AGE.name}
          type="number"
          register={register}
          errors={errors}
        />
        <CustomControlledUntypedInput
          label={FIELDS_CONFIG.EMAIL.label}
          name={FIELDS_CONFIG.EMAIL.name}
          register={register}
          errors={errors}
        />
        <CustomControlledUntypedInput
          label={FIELDS_CONFIG.PASSWORD.label}
          name={FIELDS_CONFIG.PASSWORD.name}
          type="password"
          register={register}
          errors={errors}
          watch={watch}
        />
        <CustomControlledUntypedInput
          label={FIELDS_CONFIG.PASSWORD_CONFIRM.label}
          name={FIELDS_CONFIG.PASSWORD_CONFIRM.name}
          type="password"
          register={register}
          errors={errors}
        />
        <CustomControlledDropdownSelect
          label={FIELDS_CONFIG.GENDER.label}
          name={FIELDS_CONFIG.GENDER.name}
          errors={errors}
          register={register}
        />
        <CustomControlledUntypedInput
          label={FIELDS_CONFIG.FILE.label}
          name={FIELDS_CONFIG.FILE.name}
          type="file"
          register={register}
          errors={errors}
        />
        <CustomControlledUntypedInput
          label={FIELDS_CONFIG.COUNTRY.label}
          name={FIELDS_CONFIG.COUNTRY.name}
          register={register}
          errors={errors}
        />
        <CustomControlledUntypedInput
          label={FIELDS_CONFIG.ACCEPT_TERMS.label}
          name={FIELDS_CONFIG.ACCEPT_TERMS.name}
          type="checkbox"
          register={register}
          errors={errors}
        />

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </>
  );
}
