'use strict';

const fibo = require('./fibo.js');

module.exports = function(q) {

  let reg1 = /Combien font ([0-9]+) plus ([0-9]+) ?/i;
  let reg2 = /Combien font ([0-9]+) fois ([0-9]+) ?/i;
  let reg3 = /Quel est le nombre en position ([0-9]+) de la suite de Fibonacci \(commençant par 0\) ?/i;

  if (q.match(reg1)) {
    let extract = reg1.exec(q);
    return parseFloat(extract[1]) + parseFloat(extract[2]);
  }
  else if (q.match(reg2)) {
    let extract = reg2.exec(q);
    return parseFloat(extract[1]) * parseFloat(extract[2]);
  }
  else if (q.match(reg3)) {
    let extract = reg3.exec(q);
    return fibo(parseFloat(extract[1]));
  }
  else if (q === 'Quelle est la capitale de la gastronomie Française ?') {
    return 'Lyon';
  }
  else if (q === 'Quel est ton trigramme ?') {
    return 'AGI';
  }

};
