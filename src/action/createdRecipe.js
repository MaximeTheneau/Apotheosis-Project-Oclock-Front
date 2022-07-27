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

export function difficultyAction(value, field) {
  return {
    type: DIFFICULTY_ACTION,
    value: value,
    field: field,
  };
}

export const DURATION_ACTION = 'DURATION_ACTION';

export function durationAction(value, field) {
  return {
    type: DURATION_ACTION,
    value: value,
    field: field,
  };
}

export const INGREDIENT_ACTION = 'INGREDIENT_ACTION';

export function ingredientAction(value, field) {
  return {
    type: INGREDIENT_ACTION,
    value: value,
    field: field,
  };
}

export const UNIT_ACTION = 'UNIT_ACTION';

export function unitAction(value, field) {
  return {
    type: UNIT_ACTION,
    value: value,
    field: field,
  };
}
export const QUANTITY_ACTION = 'QUANTITY_ACTION';

export function quantityAction(value, field) {
  return {
    type: QUANTITY_ACTION,
    value: value,
    field: field,
  };
}

export const ETAPE_ACTION = 'ETAPE_ACTION';

export function etapeAction(value, field) {
  return {
    type: ETAPE_ACTION,
    value: value,
    field: field,
  };
}
export const POST_CREACTED = 'POST_CREACTED';

export function postCreated() {
  return {
    type: POST_CREACTED,
  };
}