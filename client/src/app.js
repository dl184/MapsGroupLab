const BucketListView = require('./views/bucketlistView');
const Request = require('./services/request.js');
const Country = require('./models/countries.js');

const bucketListView = new BucketListView();
const dBrequest = new Request('http://localhost:3000/bucketlist');
const countriesRequest = new Request('https://restcountries.eu/rest/v2/');

const countries = new Country();

const getCountryRequestComplete = function (countries) {
  for (let country of countries) {
    bucketListView.addCountry(country);
  }
}

const post = function (country) {
  request.post(createRequestComplete, country);
  bucketListView.addCountry(country);
}

const handleKeyPress = function (event) {
  event.preventDefault();
  countries.handleKeyPress();
}

const createRequestComplete = function (country) {
  bucketListView.addCountry(country);
}

const deleteAllButtonClicked = function (event) {
  event.preventDefault();
  request.delete(deleteAllRequestComplete);
}

const deleteAllRequestComplete = function () {
    bucketListView.clear();
}

const appStart = function(){
  const ulCountries = document.getElementById("country-choice");
  dBrequest.get(getCountryRequestComplete);
  const searchBar = document.getElementById("country-search");
  searchBar.addEventListener("keyup", handleKeyPress);

  // const deleteButton = document.querySelector("#deleteButton");
  // deleteButton.addEventListener("click", deleteAllButtonClicked);
}

document.addEventListener('DOMContentLoaded', appStart);
