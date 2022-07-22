// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SET_NEW_CONTACT_MSG_CONTENT = 'SET_NEW_CONTACT_MSG_CONTENT';

// Action creator => On l'utilise au moment du dispatch()
export function setNewContactMsgContent(newMsgContactValue) {
  return {
    type: SET_NEW_CONTACT_MSG_CONTENT,
    value: newMsgContactValue,
  };
}
