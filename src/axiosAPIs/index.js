import axios from 'axios';
import { BASE_URL } from '../constants';

export const getAllData = async (url) => {
  let data = [];
  await axios({
    method: 'get',
    url: `${BASE_URL}/${url}`,
    data: null,
  })
    .then((response) => {
      data = [...response.data];
    })
    .catch((err) => {
      console.log({ err });
    });
  return data;
};

