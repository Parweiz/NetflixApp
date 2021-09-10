import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/";

export async function client(endpoint, {method, params, body, responseType}) {
  return axios({
    method,
    url: API_URL + endpoint,
    params: params,
    data: body,
    responseType: responseType,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
}

client.get = function (endpoint, {params, responseType}) {
  params = params || {};
  responseType = responseType || {};
  return client(endpoint, {method: "GET", params, responseType});
};
