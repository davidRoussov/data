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
      .then(data => response.sendStatus(201))
      .catch(error => {
        console.error('Unable to create new "map time" value');
        console.error(error);
        response.status(400);
      });
  });

  api.post('/map-time-create-mapping', (request, response) => {
    const newMappingName = request.body.newMappingName;
    mapTime.createNewMapping(newMappingName)
      .then(() => response.sendStatus(201))
      .catch(error => {
        console.error('Unable to create new mapping');
        console.error(error);
        response.sendStatus(500);
      });
  });

  api.get('/map-time-mappings', (request, response) => {
    mapTime.getAllMappings()
      .then(data => response.send(data))
      .catch(error => {
        console.error('Unable to get all mappings');
        console.error(error);
        response.sendStatus(500);
      });
  });

  api.delete('/map-time', (request, response) => {
    mapTime.deleteMapping(request.query.category)
      .then(() => response.send(true))
      .catch(error => {
        console.error('Unable to delete mapping');
        console.error(error);
        response.sendStatus(500);
      });
  });

  return api;
};