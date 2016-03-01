'use strict';

const Hapi = require('hapi');
const Boom = require('boom');

let answer = require('./answer.js');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 3001
});

// Add the route
server.route({
  method: 'GET',
  path:'/',
  handler: function (request, reply) {
    return reply("Hello, I'm a client!");
  }
});

// Add the route
server.route({
  method: 'GET',
  path:'/echo',
  handler: function (request, reply) {
    console.log('/echo endpoint hit!');
    Boom.notFound('missing');
  }
});

// Question route
server.route({
  method: 'POST',
  path:'/question',
  handler: function (request, reply) {
    if (request.payload && request.payload.question) {
      console.log(request.payload.question);
      let a = answer(request.payload.question);
      console.log('> ' + a);
      reply(a);
    }
  }
});

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Client running at:', server.info.uri);
});