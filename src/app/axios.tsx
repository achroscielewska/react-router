import axios from 'axios';
import { ENV } from '../environments/environments'

const instance = axios.create({
    baseURL: ENV.app_url
});

export default instance;