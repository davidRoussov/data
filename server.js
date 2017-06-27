import config from './config';
import path from 'path';
import express from 'express';
import { graphQLHTTP } from 'express-graphql';

import api from './api';

const app = express();
const PORT = config.port;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, './client/build')));

api(app);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});



app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
