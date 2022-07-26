export const PSEUDO_ACTION = 'PSEUDO_ACTION';

export function pseudoAction(value, field) {
  return {
    type: PSEUDO_ACTION,
    value: value,
    field: field,
  };
}
