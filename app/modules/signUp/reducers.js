const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_FULFILLED':
      return {
        ...state,
        errors: action.error ? action.payload.errors : null
      };
    case 'UPDATE_FIELD_AUTH':
      return {
        ...state,
        [action.key]: action.value
      };
    default:
      return state;
  }
}
