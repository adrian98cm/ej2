"use strict";

var _request = _interopRequireDefault(require("request"));

var _yargs = _interopRequireDefault(require("yargs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url = 'https://api.darksky.net/forecast/66c2a07bf4075cf0fef2ac00ceedca84/39.639235,%20-4.284202?units=si&lang=es'; //const url2 = 'http://api.mapbox.com/geocoding/v5/mapbox.places/Madrid.json?access_token=pk.eyJ1IjoiYWRyaWFuOThjbSIsImEiOiJjazFhbzQ0azIyN3RxM2RweXNpMzRpeHcyIn0.0vvMIv_gg6CCv2qcpDZD5A';

var locBase = 'http://api.mapbox.com/';
var locGeoc = 'geocoding/v5/mapbox.places/';
var busqueda = 'Madrid';
var locEnding = '.json?access_token=';
var locToken = 'pk.eyJ1IjoiYWRyaWFuOThjbSIsImEiOiJjazFhbzQ0azIyN3RxM2RweXNpMzRpeHcyIn0.0vvMIv_gg6CCv2qcpDZD5A';
var locURL = "".concat(locBase).concat(locGeoc).concat(busqueda).concat(locEnding).concat(locToken);
var tiempoBase = 'https://api.darksky.net/';
var tiempoToken = '66c2a07bf4075cf0fef2ac00ceedca84/';
var tiempoEndpoint = "".concat(tiempoBase, "forecast/").concat(tiempoToken);
var lat = 39.639235;

var _long = 20 - 4.284202;

var tiempoURL = "".concat(tiempoEndpoint).concat(lat, ",").concat(_long); //console.log(locURL);

console.log(tiempoURL);
var config = {
  url: tiempoURL,
  json: true
};

var callback = function callback(error, response) {
  console.log("La temperatura en: ", response.body.timezone, " es de ", response.body.currently.temperature);
  console.log("La probabilidad de lluvia es de  ", response.body.currently.precipProbability);
};

_yargs["default"].parse();

(0, _request["default"])(config, callback);

_yargs["default"].command({
  command: 'add',
  describe: 'add a location to search',
  builder: {
    name: {
      describe: 'Name of the location',
      demandOption: 'true',
      type: 'string'
    },
    index: {
      describe: 'Index of the location',
      demandOption: 'true',
      type: 'number'
    }
  }
});

_yargs["default"].parse();