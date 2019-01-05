export const selectLibrary = (id) => {
  return {
    type: 'SELECTED',
    payload: id
  }
}