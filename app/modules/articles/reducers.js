const articleList = (state = {}, action) => {
  switch (action.type) {
    case 'ARTICLE_LIST_FULFILLED' :
      return {
        ...state,
        articles: action.payload
      };
    default:
      return state;
  }
};

const editor = (state = {}, action) => {
  switch (action.type) {
    case 'ARTICLE_EDITOR_PAGE_LOADED' :
      return {
        ...state,
        article: action.payload
      };
    case 'ARTICLE_EDITOR_UPDATE_FIELD' :
      return {
        ...state,
        [action.key]: action.value
      };
    case 'ARTICLE_EDITOR_FORM_SUBMITTED' :
      return {
        ...state,
        article: action.payload
      };
    default:
      return state;
  }
};

export {
  articleList,
  editor
}
