// Harvesine conversion
//Mile constant to get the distance in... well, miles
const R = 3959;

//first user coordinates
let latitudeOne = 38.6270025;
let longitudeOne = -90.19940419999999;

//second user coordinates
let latitudeTwo = 48.6270025;
let longitudeTwo = -80.19940419999999;

const radiansOne = latitudeOne * Math.PI/180;
const radiansTwo = latitudeTwo * Math.PI/180;

const deltaLat = (latitudeOne-latitudeTwo) * Math.PI/180;
const deltaLon = (longitudeOne - longitudeTwo) * Math.PI/180;

const angle = Math.pow(Math.sin(deltaLat/2), 2) + Math.cos(radiansOne) * Math.cos(radiansTwo) * Math.pow(Math.sin(deltaLon/2), 2);

const c = 2*Math.atan2(Math.sqrt(angle), Math.sqrt(1-angle));

const distance =  R * c;