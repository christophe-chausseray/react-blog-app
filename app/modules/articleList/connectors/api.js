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
