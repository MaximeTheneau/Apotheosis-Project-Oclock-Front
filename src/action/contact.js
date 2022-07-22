// Action for the new message content contact
export const SET_NEW_CONTACT_MSG_CONTENT = 'SET_NEW_CONTACT_MSG_CONTENT';

export function setNewContactMsgContent(newMsgContactValue) {
  return {
    type: SET_NEW_CONTACT_MSG_CONTENT,
    value: newMsgContactValue,
  };
}
