const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv.slice(2);

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetching details!!\n', error);
  }

  console.log(desc);
});