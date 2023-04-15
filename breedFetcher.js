const request = require("request");


const fetchBreedDescription = (breedName, cb) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (response) {
      const data = JSON.parse(body);

      if (data.length === 0) {
        return cb(null, `Oops!! It appears that ${breedName} is not in our database!!!`);
      }

      return cb(null, (data[0].description));
    }

    return cb(error, null);
  });
};


module.exports = { fetchBreedDescription };