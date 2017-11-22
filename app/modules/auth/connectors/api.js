import axios from 'axios';

const API_ROOT = 'https://conduit.productionready.io/api';

/**
 * Register an user.
 *
 * @param username
 * @param email
 * @param password
 * @return {*}
 */
const registerUser = (username, email, password) => {
  const data = { user: { username, email, password }};

  const url = `${API_ROOT}/users`;
  return axios.post(url, data)
    .then(response => response);
};

/**
 * Login the user.
 * 
 * @param email
 * @param password
 * @return {*}
 */
const loginUser = (email, password) => {
  const data = { user: { email, password }};

  const url = `${API_ROOT}/users/login`;
  return axios.post(url, data)
    .then(response => response);
};

export {
  registerUser,
  loginUser
}
