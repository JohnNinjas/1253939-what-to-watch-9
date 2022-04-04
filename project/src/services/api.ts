import axios, {AxiosInstance} from 'axios';

const BACKEND_URL = 'https://9.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => axios.create({baseURL: BACKEND_URL, timeout: REQUEST_TIMEOUT});
