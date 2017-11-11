const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ARTICLE_LIST_FULFILLED' :
      return {
        ...state,
        articles: action.payload
      };
    default:
      return state;
  }
}
