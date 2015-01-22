'use strict';

function unitParse (str) {
  return (str.match(/([-\d.]+)\s*([A-Za-z]+)/) || []).slice(1);
}

function millimeters (n) {
  return n * 3.779527559055;
}

function centimeters (n) {
  return n * 37.79527559055;
}

function inches (n) {
  return n * 96;
}

var units = {
  'mm': millimeters,
  'cm': centimeters,
  'in': inches
};

module.exports = function (str) {
  var parsed = unitParse(str);
  var convertor = units[parsed[1]];

  if (!convertor) { throw new Error('Unsupported format'); }

  return convertor(parsed[0]);
};
