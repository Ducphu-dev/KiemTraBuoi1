// https://api.weatherapi.com/v1/current.json?key=b72b885b72f84ed681c42155220102&q=SaiGon

const request = require("request");

const locationInput = "SaiGon";
const url =
  "https://api.weatherapi.com/v1/current.json?key=b72b885b72f84ed681c42155220102&q=";

const getTemp = (location) => {
  return new Promise((resolve, reject) => {
    request.get(url + location, function (error, response, body) {
      if (error) return reject(error);
      if (body) return resolve(JSON.parse(body)?.current?.temp_c);
    });
  });
};

const tempC = getTemp(locationInput).then((data) =>
  console.log("Nhiệt độ hiện tại là: " + data)
);
