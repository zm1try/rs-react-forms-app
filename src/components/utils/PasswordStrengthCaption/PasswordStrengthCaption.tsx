import { PasswordStrengthLevel } from '../../../types/types';
import {
  oneLowercaseLetter,
  oneNumber,
  oneSpecialChar,
  oneUppercaseLetter,
} from '../../../utils/regex';

export default function PasswordStrengthCaption({
  passwordValue,
}: {
  passwordValue: string;
}) {
  return (
    <>
      <div>
        <p>{getPasswordStrengthCaptionByValue(passwordValue)}</p>
      </div>
    </>
  );
}

function getPasswordStrengthCaptionByValue(passwordValue: string): string {
  const strengthWeight =
    Number(oneSpecialChar.test(passwordValue)) +
    Number(oneNumber.test(passwordValue)) +
    Number(oneUppercaseLetter.test(passwordValue)) +
    Number(oneLowercaseLetter.test(passwordValue));

  switch (strengthWeight) {
    case 4:
      return PasswordStrengthLevel.Strong;
    case 3:
      return PasswordStrengthLevel.Good;
    case 2:
      return PasswordStrengthLevel.Weak;
    case 1:
      return PasswordStrengthLevel.Poor;
    default:
      return '';
  }
}
