(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getBeers = exports.getBeers = function getBeers() {
  return fetch('https://api.punkapi.com/v2/beers/');
};

},{}],2:[function(require,module,exports){
'use strict';

var _api = require('./api.js');

(0, _api.getBeers)().then(function (response) {
  return response.json();
}).catch(function (e) {
  return console.error('Something went wrong', e);
}).then(function (response) {
  document.getElementById("num").innerHTML += response.length;
  var result = "";
  for (var i = 0; i < response.length; i++) {
    result += "<div class='div_center'><b>" + response[i].name+"<br>" + '<img src="' + response[i].image_url + '" width="90" height="160">' + "<br><b>Tagline:</b>" + response[i].tagline + "<br><b>First brewed:</b>" + response[i].first_brewed + "<br><b>Yeast:</b>" + response[i].ingredients.yeast + "<hr></div>";
  }
  document.getElementById("beers").innerHTML = result;
});

},{"./api.js":1}]},{},[2]);