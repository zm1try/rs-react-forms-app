type FormFieldType =
  | 'name'
  | 'age'
  | 'email'
  | 'password'
  | 'passwordConfirm'
  | 'gender'
  | 'file'
  | 'acceptTerms'
  | 'country';

type FormDataType = Record<
  FormFieldType,
  FormDataEntryValue | number | boolean | string | null
>;

enum PasswordStrengthLevel {
  Good = 'Good',
  Strong = 'Strong',
  Weak = 'Weak',
  Poor = 'Poor',
}

type FieldConfigType = {
  id: string;
  name: FormFieldType;
  label: string;
};

type FieldsConfigType = {
  NAME: FieldConfigType;
  AGE: FieldConfigType;
  EMAIL: FieldConfigType;
  PASSWORD: FieldConfigType;
  PASSWORD_CONFIRM: FieldConfigType;
  GENDER: FieldConfigType;
  FILE: FieldConfigType;
  ACCEPT_TERMS: FieldConfigType;
  COUNTRY: FieldConfigType;
};

type FormErrorsType = Record<FormFieldType, string>;

interface IFile {
  type: string;
  path: string;
  size: number;
}

export type {
  FormFieldType,
  FormErrorsType,
  IFile,
  FormDataType,
  FieldsConfigType,
};
export { PasswordStrengthLevel };
