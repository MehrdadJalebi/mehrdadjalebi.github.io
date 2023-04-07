import axios from "axios"
import { serverUrls } from '~/utils'

export function getAllCountries() {
  return axios.get(
    `${serverUrls.baseUrl}/all`
  ).then(response => { 
    return response.data;
  });
}

export function getCountryByCode(code) {
  return axios.get(
    `${serverUrls.baseUrl}/alpha/${code}`
  ).then(response => { 
    return response.data[0];
  });
}

export function getBorderCountries(codes) {
  return axios.get(
    `${serverUrls.baseUrl}/alpha?codes=${codes}`
  ).then(response => { 
    return response.data;
  });
}