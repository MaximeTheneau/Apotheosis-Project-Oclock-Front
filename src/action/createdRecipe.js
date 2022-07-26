export const TITLE_ACTION = 'TITLE_ACTION ';

// Action creator => On l'utilise au moment du dispatch()
export function titleAction(value, field) {
  return {
    type: TITLE_ACTION,
    value: value,
    field: field,
  };
}
export const INGREDIENTS_ACTION = 'INGREDIENTS_ACTION ';

// Action creator => On l'utilise au moment du dispatch()
export function ingredientsAction(value, field) {
  return {
    type: INGREDIENTS_ACTION,
    value: value,
    field: field,
  };
}
