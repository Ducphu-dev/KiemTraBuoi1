// https://api.weatherapi.com/v1/current.json?key=b72b885b72f84ed681c42155220102&q=SaiGon

const request = require("request");

const url = "http://localhost:3000";

const getTemp = (subpend, num1, num2) => {
  const calc = `/${subpend}/${num1}/${num2}`;
  return new Promise((resolve, reject) => {
    request.get(url + calc, function (error, response, body) {
      const result = JSON.parse(body)?.result;
      if (error) return reject(error);
      if (body) resolve(result);
    });
  });
};

const Calc = getTemp("cong", 3, 4)
  .then((data) => getTemp("nhan", data, 5))
  .then((data) => getTemp("chia", data, 2))
  .then((data) => console.log("Kết quả: " + data));

console.log(Calc);
