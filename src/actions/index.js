export const selectLibrary = (id) => {
  return {
    type: 'SELECTED',
    payload: id
  }
};


// AUTH
export const onEmailChange = (text) => {
  return {
    type: 'EMAIL_CHANGED',
    payload: text
  }
}