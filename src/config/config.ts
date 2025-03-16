import { FieldsConfigType } from '../types/types';

const COUNTRY_LIST = ['Acountry', 'Bcountry', 'Ccountry', 'Dcountry'];
const GENDER_LIST = ['gender1', 'gender2'];
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png'];
const MAX_AGE = 200;
const MIN_PASSWORD_LENGTH = 4;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const COUNTRY_LIST_ID = 'countryList';

const VALIDATOR_CAPTIONS = {
  REQUIRED: 'This field is required',
  ONLY_LATIN: 'Name can only contain Latin chars',
  START_WITH_CAPITAL: 'Must start with a capital char',
  POSITIVE_NUMBER: "Can't be negative",
  INVALID_EMAIL: 'Invalid email',
  SHORT_PASSWORD: 'Too short',
  ONE_SPECIAL_CHAR: 'Must contain at least one special character',
  ONE_NUMBER: 'Must contain at least one number',
  ONE_UPPERCASE_LETTER: 'Must contain at least one uppercased letter',
  ONE_LOWERCASE_LETTER: 'Must contain at least one lowercased letter',
  PASSWORDS_NOT_MATCH: 'Password does not match',
  INVALID_FILE_FORMAT: 'Invalid file format',
  FILE_SIZE_LIMIT: 'File size should be less than 10Mb',
  ACCEPT_TERMS: 'You must accept terms and conditions',
  UNKNOWN_COUNTRY: 'Unknown country',
};

const FIELDS_CONFIG: FieldsConfigType = {
  NAME: {
    id: 'name',
    name: 'name',
    label: 'Name',
  },
  AGE: {
    id: 'age',
    name: 'age',
    label: 'Age',
  },
  EMAIL: {
    id: 'email',
    name: 'email',
    label: 'Email',
  },
  PASSWORD: {
    id: 'password',
    name: 'password',
    label: 'Password',
  },
  PASSWORD_CONFIRM: {
    id: 'passwordConfirm',
    name: 'passwordConfirm',
    label: 'Confirm password',
  },
  GENDER: {
    id: 'gender',
    name: 'gender',
    label: 'Gender',
  },
  FILE: {
    id: 'file',
    name: 'file',
    label: 'Upload a picture (png/jpeg)',
  },
  COUNTRY: {
    id: 'country',
    name: 'country',
    label: 'Country',
  },
  ACCEPT_TERMS: {
    id: 'acceptTerms',
    name: 'acceptTerms',
    label: 'Accept Terms and Conditions',
  },
};

export {
  COUNTRY_LIST,
  GENDER_LIST,
  MAX_AGE,
  MIN_PASSWORD_LENGTH,
  MAX_FILE_SIZE,
  ALLOWED_FILE_TYPES,
  COUNTRY_LIST_ID,
  FIELDS_CONFIG,
  VALIDATOR_CAPTIONS,
};
