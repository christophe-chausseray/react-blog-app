const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_FULFILLED':
      return {
        ...state,
        data: action.payload.data
      };
    case 'REGISTER_REJECTED':
      return {
        ...state,
        error: action.payload.response.data.errors
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
