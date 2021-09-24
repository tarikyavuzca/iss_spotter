// index.js

// The code below is temporary and can be commented out.
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

fetchMyIP((error, ip) => {

  
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});


fetchCoordsByIP('97.108.191.230', (err, coord) => {
  if(err) {
    console.log("didn't work", err);
    return;
  }

  console.log('It worked', coord);
});

fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, time) => {
  if (error) {
    console.log("It didn't work", error);
  }

  console.log("it worked", time);
});

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  
  printPassTimes(passTimes);
});