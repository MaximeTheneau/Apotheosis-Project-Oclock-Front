// Action to open the Menu in the mobile version
export const TOGGLE_MENU = 'TOGGLE_MENU';

export function toggleMenu() {
  return {
    type: TOGGLE_MENU,
  };
}

export const CLOSE_MOBILE_MENU = 'CLOSE_MOBILE_MENU';

export function closeMobileMenu() {
  return {
    type: CLOSE_MOBILE_MENU,
  };
}
