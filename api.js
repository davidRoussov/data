import express from 'express';
import mapTime from './lib/mapTime';

export default (api) => {

  api.get('/map-time', function (request, response) {
    const category = request.query.category;
    mapTime.getData(category)
      .then(data => response.send(data))
      .catch(error => {
        console.error('Unable to retrieve "map time" data');
        console.error(error);
        response.send(null);
      });      
  });

  return api;
};