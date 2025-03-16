import { boolean, mixed, number, object, ref, string } from 'yup';
import { IFile } from '../types/types';
import {
  oneSpecialChar,
  oneUppercaseLetter,
  oneNumber,
  oneLowercaseLetter,
  onlyLatinChars,
  startWithCapital,
  email,
} from '../utils/regex';
import {
  ALLOWED_FILE_TYPES,
  FIELDS_CONFIG,
  GENDER_LIST,
  MAX_AGE,
  MAX_FILE_SIZE,
  MIN_PASSWORD_LENGTH,
  VALIDATOR_CAPTIONS,
} from '../config/config';

const commonRules = {
  name: string()
    .required(VALIDATOR_CAPTIONS.REQUIRED)
    .matches(onlyLatinChars, VALIDATOR_CAPTIONS.ONLY_LATIN)
    .matches(startWithCapital, VALIDATOR_CAPTIONS.START_WITH_CAPITAL),
  age: number()
    .required(VALIDATOR_CAPTIONS.REQUIRED)
    .positive(VALIDATOR_CAPTIONS.POSITIVE_NUMBER)
    .integer()
    .lessThan(MAX_AGE),
  email: string()
    .required(VALIDATOR_CAPTIONS.REQUIRED)
    .matches(email, VALIDATOR_CAPTIONS.INVALID_EMAIL),
  password: string()
    .required(VALIDATOR_CAPTIONS.REQUIRED)
    .min(MIN_PASSWORD_LENGTH, VALIDATOR_CAPTIONS.SHORT_PASSWORD)
    .matches(oneSpecialChar, VALIDATOR_CAPTIONS.ONE_SPECIAL_CHAR)
    .matches(oneNumber, VALIDATOR_CAPTIONS.ONE_NUMBER)
    .matches(oneUppercaseLetter, VALIDATOR_CAPTIONS.ONE_UPPERCASE_LETTER)
    .matches(oneLowercaseLetter, VALIDATOR_CAPTIONS.ONE_LOWERCASE_LETTER),
  passwordConfirm: string()
    .required(VALIDATOR_CAPTIONS.REQUIRED)
    .oneOf(
      [ref(FIELDS_CONFIG.PASSWORD.name)],
      VALIDATOR_CAPTIONS.PASSWORDS_NOT_MATCH
    ),
  gender: string().required(VALIDATOR_CAPTIONS.REQUIRED).oneOf(GENDER_LIST),
  country: string().required(VALIDATOR_CAPTIONS.REQUIRED),
};

const schema = object({
  ...commonRules,
  file: mixed<IFile>()
    .required(VALIDATOR_CAPTIONS.REQUIRED)
    .test(
      'file presence',
      VALIDATOR_CAPTIONS.REQUIRED,
      (value) => (value as IFile).size !== 0
    )
    .test('file type', VALIDATOR_CAPTIONS.INVALID_FILE_FORMAT, (value) =>
      ALLOWED_FILE_TYPES.includes((value as IFile).type)
    )
    .test(
      'file size',
      VALIDATOR_CAPTIONS.FILE_SIZE_LIMIT,
      (value) => (value as IFile).size <= MAX_FILE_SIZE
    )
    .required(VALIDATOR_CAPTIONS.REQUIRED),
  acceptTerms: string().required(VALIDATOR_CAPTIONS.ACCEPT_TERMS),
});

const controlledFormSchema = object({
  ...commonRules,
  file: mixed<FileList>()
    .required(VALIDATOR_CAPTIONS.REQUIRED)
    .test('file presence', VALIDATOR_CAPTIONS.REQUIRED, (value: FileList) =>
      Boolean(value.length)
    )
    .test(
      'file type',
      VALIDATOR_CAPTIONS.INVALID_FILE_FORMAT,
      (value: FileList) =>
        Boolean(value.length) && ALLOWED_FILE_TYPES.includes(value[0].type)
    )
    .test(
      'file size',
      VALIDATOR_CAPTIONS.FILE_SIZE_LIMIT,
      (value) => Boolean(value.length) && value[0].size <= MAX_FILE_SIZE
    ),
  acceptTerms: boolean()
    .required(VALIDATOR_CAPTIONS.ACCEPT_TERMS)
    .oneOf([true], VALIDATOR_CAPTIONS.ACCEPT_TERMS),
});

export { schema, controlledFormSchema };
