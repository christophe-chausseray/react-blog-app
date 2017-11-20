import axios from 'axios';
import qs from 'query-string';

const API_ROOT = 'https://conduit.productionready.io/api';

export function getArticleList() {
  const data = qs.stringify({
    limit: 10
  });

  const url = `${API_ROOT}/articles?${data}`;
  return axios.get(url)
    .then(response => response.data.articles);
}

export function addArticle(article) {
  const url = `${API_ROOT}/articles`;
  const config = {
    headers: {'authorization': `Token ${window.localStorage.getItem('authorization')}`}
  };

  return axios.post(url, article, config)
    .then(response => response.data.article);
}

export function updateArticle(article) {
  const url = `${API_ROOT}/articles/${article.slug}`;
  const config = {
    headers: {'authorization': `Token ${window.localStorage.getItem('authorization')}`}
  };

  return axios.put(url, article, config)
    .then(response => response.data.article);
}

export function getArticle(slug) {
  const url = `${API_ROOT}/articles/${slug}`;
  const config = {
    headers: {'authorization': `Token ${window.localStorage.getItem('authorization')}`}
  };

  return axios.get(url, config)
    .then(response => response.data.article);
}

export function deleteArticle(slug) {
  const url = `${API_ROOT}/articles/${slug}`;
  const config = {
    headers: {'authorization': `Token ${window.localStorage.getItem('authorization')}`}
  };

  return axios.delete(url, config)
    .then(response => response.data.article);
}
