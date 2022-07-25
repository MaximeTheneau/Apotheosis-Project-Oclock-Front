// Action for the new message content contact
export const SET_NEW_CONTACT_MSG_CONTENT = 'SET_NEW_CONTACT_MSG_CONTENT';

export function setNewContactMsgContent(newMsgContactValue) {
  return {
    type: SET_NEW_CONTACT_MSG_CONTENT,
    value: newMsgContactValue,
  };
}

export const SET_SETTINGS_FIELD = 'SET_SETTINGS_FIELD';

export function setSettingsField(value, field) {
  return {
    type: SET_SETTINGS_FIELD,
    value: value,
    field: field,
  };
}

