/**
 * Manage the authorization token in the local storage.
 *
 * @param store
 * @param next
 * @param action
 */
const localStorageMiddleware = store => next => action => {
  if (action.type === 'REGISTER_FULFILLED' || action.type === 'LOGIN_FULFILLED') {
    if (!action.error) {
      window.localStorage.setItem('authorization', action.payload.data.user.token);
    }
  } else if (action.type === 'LOGOUT') {
    window.localStorage.setItem('authorization', '');
  }

  next(action);
};

export {
  localStorageMiddleware
}
