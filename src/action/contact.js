export const PSEUDO_ACTION = 'PSEUDO_ACTION';

export function pseudoAction(value, field) {
  return {
    type: PSEUDO_ACTION,
    value: value,
    field: field,
  };
}

export const EMAIL_ACTION = 'EMAIL_ACTION';

export function emailAction(value, field) {
  return {
    type: EMAIL_ACTION,
    value: value,
    field: field,
  };
}

