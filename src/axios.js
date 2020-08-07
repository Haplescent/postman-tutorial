import axios from "axios";

const getHighestIncreaseCases = (jsonData) => {
  let stateData = Object.values(jsonData.data.regions);
  let stateToDeliver;
  let highestcases = 0;
  for (let i = 0; i < stateData.length; i++) {
    let cases = stateData[i].change.active_cases;
    if (cases > highestcases) {
      highestcases = cases;
      stateToDeliver = stateData[i].name;
    }
  }
  return stateToDeliver;
};

const getCovidState = () => {
  return new Promise((resolve, reject) => {
    let config = {
      method: "get",
      url:
        "https://api.quarantine.country/api/v1/summary/region?sub_areas=1&region=USA",
      headers: {
        Accept: "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        let jsonData = JSON.stringify(response.data);
        resolve(getHighestIncreaseCases(jsonData));
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

const getCovidCity = (state) => {
  return new Promise((resolve, reject) => {
    let config = {
      method: "get",
      url: `https://api.quarantine.country/api/v1/summary/region?region=${state}&sub_areas=1`,
      headers: {
        Accept: "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        let jsonData = JSON.stringify(response.data);
        resolve(getHighestIncreaseCases(jsonData));
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

const getCarriers = () => {
  return new Promise((resolve, reject) => {
    let config = {
      method: "get",
      url: "https://api.shipengine.com/v1/carriers",
      headers: {
        "API-Key": process.env.shipengineAPI,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};
