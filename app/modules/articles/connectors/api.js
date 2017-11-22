import axios from 'axios';
import qs from 'query-string';

const API_ROOT = 'https://conduit.productionready.io/api';

/**
 * Retrieve the article list.
 *
 * @return {*}
 */
const getArticleList = () => {
  const data = qs.stringify({
    limit: 10
  });

  const url = `${API_ROOT}/articles?${data}`;
  return axios.get(url)
    .then(response => response.data.articles);
};

/**
 * Add an article.
 *
 * @param article
 * @return {*}
 */
const addArticle = article => {
  const url = `${API_ROOT}/articles`;
  const config = {
    headers: {'authorization': `Token ${window.localStorage.getItem('authorization')}`}
  };

  return axios.post(url, article, config)
    .then(response => response.data.article);
};

/**
 * Update an article.
 *
 * @param article
 * @return {*}
 */
const updateArticle = article => {
  const url = `${API_ROOT}/articles/${article.slug}`;
  const config = {
    headers: {'authorization': `Token ${window.localStorage.getItem('authorization')}`}
  };

  return axios.put(url, article, config)
    .then(response => response.data.article);
};

/**
 * Get an article.
 *
 * @param slug
 * @return {*}
 */
const getArticle = slug => {
  const url = `${API_ROOT}/articles/${slug}`;
  const config = {
    headers: {'authorization': `Token ${window.localStorage.getItem('authorization')}`}
  };

  return axios.get(url, config)
    .then(response => response.data.article);
};

/**
 * Delete an article.
 *
 * @param slug
 * @return {*}
 */
const deleteArticle = slug => {
  const url = `${API_ROOT}/articles/${slug}`;
  const config = {
    headers: {'authorization': `Token ${window.localStorage.getItem('authorization')}`}
  };

  return axios.delete(url, config)
    .then(response => response.data.article);
};

export {
  getArticleList,
  addArticle,
  updateArticle,
  getArticle,
  deleteArticle
}
