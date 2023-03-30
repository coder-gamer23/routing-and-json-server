import Axios from 'axios';

const Apicall = Axios.create({
  baseURL: 'http://localhost:3001',
})

export default Apicall;