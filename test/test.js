/*global describe, it */
'use strict';
var assert = require('assert');
var pixelConverter = require('../');

var oneMm = 3.779527559055;
var oneCm = 37.79527559055;
var oneIn = 96;

describe('pixel-converter node module', function () {
  it('converts millimeters to pixels', function () {
    var result1 = pixelConverter('1mm');
    assert(true, result1 === oneMm);

    var result2 = pixelConverter('2 mm');
    assert(true, result2 === oneMm * 2);

    // Browsers round... so this value in browser will be '794'
    var resultA4 = pixelConverter('210mm');
    assert(true, resultA4 === 793.70078740155);
  });

  it('converts cenitimeters to pixels', function () {
    var result1 = pixelConverter('1cm');
    assert(true, result1 === oneCm);

    var result2 = pixelConverter('2 cm');
    assert(true, result2 === oneCm * 2);
  });

  it('converts inches to pixels', function () {
    var result1 = pixelConverter('1in');
    assert(true, result1 === oneIn);

    var result2 = pixelConverter('2 in');
    assert(true, result2 === oneIn * 2);
  });
});
