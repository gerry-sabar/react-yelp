import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer N6_-Q21GVMRlfdiYsIYIIpOCvZprryhtmKVEB0UJPIFOaSFdopbcjpinHPDxdnCXo2JVEdAxY9PF5Wue2Qy77ekY07Nk3-m1FcS9G5RA34PmslI4nUDJcewnP0TMXnYx'
  }
});
