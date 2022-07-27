/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

// selector for choose
export function findChoose(categories, searchedSlug) {
  const choose = categories.find((chooses) => {
    return chooses.slug === searchedSlug;
  });
  return choose;
}
