import axios from 'axios';

// export const BASE_URL="http://localhost:9292" //java server side port no

// export const myAxios=axios.create({
//   // baseURL: 'http://localhost:8080/employees/',
//   // headers: {
//   //   'Content-Type': 'application/json',
//   // },
//   baseURL: BASE_URL
// });

export default axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
});