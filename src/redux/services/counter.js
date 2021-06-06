import {axios} from '../../helper/axios';

const fetchCounterService = () => {
  return new Promise((resolve, reject) => {
    axios.get(`/test`)
    .then((response) => resolve(response))
    .catch((error) => reject(error))
  })
}

export { fetchCounterService };