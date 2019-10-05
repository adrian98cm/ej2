import request from 'request';
import yargs from 'yargs';
const url = 'https://api.darksky.net/forecast/66c2a07bf4075cf0fef2ac00ceedca84/39.639235,%20-4.284202?units=si&lang=es';
//const url2 = 'http://api.mapbox.com/geocoding/v5/mapbox.places/Madrid.json?access_token=pk.eyJ1IjoiYWRyaWFuOThjbSIsImEiOiJjazFhbzQ0azIyN3RxM2RweXNpMzRpeHcyIn0.0vvMIv_gg6CCv2qcpDZD5A';


const locBase = 'http://api.mapbox.com/';
const locGeoc = 'geocoding/v5/mapbox.places/';
const busqueda = 'Madrid';
const locEnding = '.json?access_token='
const locToken = 'pk.eyJ1IjoiYWRyaWFuOThjbSIsImEiOiJjazFhbzQ0azIyN3RxM2RweXNpMzRpeHcyIn0.0vvMIv_gg6CCv2qcpDZD5A';
const locURL = `${locBase}${locGeoc}${busqueda}${locEnding}${locToken}`;

const tiempoBase = 'https://api.darksky.net/';
const tiempoToken = '66c2a07bf4075cf0fef2ac00ceedca84/';
const tiempoEndpoint = `${tiempoBase}forecast/${tiempoToken}`;
const lat = 39.639235;
const long = 20-4.284202;
const tiempoURL = `${tiempoEndpoint}${lat},${long}`;


//console.log(locURL);
console.log(tiempoURL);




const config = {
    url: tiempoURL,
    json: true,
}


const callback = (error, response) =>{
 
    console.log("La temperatura en: ",response.body.timezone," es de ",response.body.currently.temperature);
    console.log("La probabilidad de lluvia es de  ",response.body.currently.precipProbability);
    


}

request(config,callback);


yargs.command({

    command: 'add',

    describe: 'add a location to search',

    builder:{
        name:{
            describe: 'Name of the location',
            demandOption: 'true',
            type: 'string'

        },
        index:{
            describe: 'Index of the location',
            demandOption: 'true',
            type: 'number'
        }
    },
})

yargs.parse();