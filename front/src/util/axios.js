import axios from 'axios';

export default axios.create({
  baseURL: 'http://ec2-3-35-204-189.ap-northeast-2.compute.amazonaws.com:8080',
});
