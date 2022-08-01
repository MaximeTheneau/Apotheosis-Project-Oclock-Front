export const required = (value) => value ? undefined : 'Champ obligatoire!'
export const maxLength = max => value =>
  value && value.length > max ? `Doit faire ${max} caractères maximum` : undefined
export const maxLength60 = maxLength(60)
export const number = value => value && isNaN(Number(value)) ? 'Precisa ser numérico' : undefined
export const minValue = min => value =>
  value && value.length < min ? `No mínimo ${min}` : undefined
export const minValue4 = minValue(4);
export const emailvalid = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Email invalide' : undefined
