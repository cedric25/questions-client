'use strict';

const Boom = require('boom');
const answer = require('../answer.js');

module.exports = [
  {
    method: 'GET',
    path:'/',
    handler: function (request, reply) {
      return reply("Hello, I'm a client!");
    }
  },
  {
    method: 'GET',
    path:'/echo',
    handler: function (request, reply) {
      console.log('/echo endpoint hit!');
      Boom.notFound('missing');
    }
  },
  {
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
  }
];
