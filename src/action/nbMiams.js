export const NB_MIAMS = 'NB_MIAMS';

export function nbMiams(nbMiams1) {
  return {
    type: NB_MIAMS,
    nbMiams: nbMiams1,
  };
}
export const NB_MIAMS_COUNT = 'NB_MIAMS_COUNT';

export function nbMiamsCount() {
  return {
    type: NB_MIAMS_COUNT,

  };
}

export const SAVE_RECIPE_NBMIAMS = 'SAVE_RECIPE_NBMIAMS';

export function saveRecipeNbMiams(oneRecipeNbMiams) {
  return {
    type: SAVE_RECIPE_NBMIAMS,
    nbMiams: oneRecipeNbMiams,
  };
}
