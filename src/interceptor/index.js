import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('Interceptor in action -> REQUEST', config);
    config.headers.authorization = 'Bearer qwertyuiopasdfghjklzxcvbnm1234567890';

    
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    console.log('Interceptor in action -> RESPONSE', response);
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });