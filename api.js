import express from 'express';
import mapTime from './lib/mapTime';

export default (api) => {

  api.get('/map-time', (request, response) => {
    const category = request.query.category;
    mapTime.getData(category)
      .then(data => response.send(data))
      .catch(error => {
        console.error('Unable to retrieve "map time" data');
        console.error(error);
        response.send(null);
      });      
  });

  api.post('/map-time-create-value', (request, response) => {
    const category = request.body.category;
    const newValue = request.body.newValue;
    mapTime.createNewValue(category, newValue)
      .then(data => response.status(201))
      .catch(error => {
        console.error('Unable to create new "map time" value');
        console.error(error);
        response.status(400);
      });
  });

  return api;
};