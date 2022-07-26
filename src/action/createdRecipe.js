export const TITLE_ACTION = 'TITLE_ACTION ';

export function titleAction(value, field) {
  return {
    type: TITLE_ACTION,
    value: value,
    field: field,
  };
}
export const INGREDIENTS_ACTION = 'INGREDIENTS_ACTION ';

export function ingredientsAction(value, field) {
  return {
    type: INGREDIENTS_ACTION,
    value: value,
    field: field,
  };
}
export const TYPE_ACTION = 'TYPE_ACTION';

export function typeAction(value, field) {
  return {
    type: TYPE_ACTION,
    value: value,
    field: field,
  };
}

export const DIFFICULTY_ACTION = 'DIFFICULTY_ACTION';

// Action creator => On l'utilise au moment du dispatch()
export function difficultyAction(value, field) {
  return {
    type: DIFFICULTY_ACTION,
    value: value,
    field: field,
  };
}
