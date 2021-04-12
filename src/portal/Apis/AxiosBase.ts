import axios from 'axios';
{
  /*import { getToken } from '../../auth';*/
}
import { GetConfig } from '../../config';

const config = GetConfig();
const http = axios.create({
  baseURL: `url`,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});




export { http };
