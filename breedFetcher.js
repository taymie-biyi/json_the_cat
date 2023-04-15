const request = require("request");
// const readline = require('readline');

const breedName = process.argv.slice(2);

const fetchBreedDescription = (breedName) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, body) => {

    if (error) {
      console.log('error:', error);
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      console.log(`Oops!! Looks that that ${breedName} is not in our database!!!`);
    }

    //  // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // // console.log('body:', body); // Print the HTML for the Google homepage.
    // // console.log(typeof body)
    console.log(data);
    console.log(data[0].description);
  });
};

fetchBreedDescription(breedName);
// console.log(typeof body)
// const data = JSON.parse(body);
// console.log(data);
// console.log(typeof data);