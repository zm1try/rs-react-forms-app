const oneUppercaseLetter = /[A-Z]/;
const oneLowercaseLetter = /[a-z]/;
const oneNumber = /[0-9]/;
const oneSpecialChar = /[!@#$%^&*{}(),.:<>|]/;
const onlyLatinChars = /^([A-Za-z\s]*)$/gi;
const startWithCapital = /^[A-Z]/;
const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export {
  oneUppercaseLetter,
  oneLowercaseLetter,
  oneNumber,
  oneSpecialChar,
  onlyLatinChars,
  startWithCapital,
  email,
};
