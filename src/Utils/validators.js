const EMAIL_REGEX = /\S+@\S+\.\S+/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export function isValidEmail(emailValue) {
  return EMAIL_REGEX.test(emailValue);
}

export function isValidPassword(passwordValue) {
  return PWD_REGEX.test(passwordValue);
}

export function validMatchPassword(passwordValue, confirmedPasswordValue) {
  if (passwordValue === confirmedPasswordValue) {
    return true;
  }

  return false;
}
