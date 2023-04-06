import axios from "axios"
import { serverUrls } from '~/utils'

export function getAllCountries() {
  return axios.get(
    `${serverUrls.baseUrl}/all`
  ).then(response => {                                                 
    return response.data;                                                                        
  });
}
