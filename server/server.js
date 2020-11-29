const express = require('express');

const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/newlistings', async (req, res) => {
  try {
    await axios
      .get('https://us-central1-marketplace-test-6a376.cloudfunctions.net/efNewListings')
      .then((response) => {
        res.send(response.data);
      });
  } catch (error) {
    res.send({ msg: 'An error has occured' });
  }
});

app.get('/api/alllistings', async (req, res) => {
  try {
    await axios
      .get('https://us-central1-marketplace-test-6a376.cloudfunctions.net/efMarketplaceTest')
      .then((response) => {
        res.send(response.data);
      });
  } catch (error) {
    res.send({ msg: 'An error has occured' });
  }
});

app.get('/api/listing/:listingId', async (req, res) => {
  const listingNumber = req.params.listingId;

  try {
    await axios
      .get(`https://api.empireflippers.com/api/v1/listings/list?listing_number=${listingNumber}`)
      .then((response) => {
        res.send(response.data);
      });
  } catch (error) {
    res.send({ msg: 'An error has occured' });
  }
});

app.get('/api/listings/:sortType/:order', async (req, res) => {
  const { sortType, order } = req.params;

  try {
    await axios
      .get(`https://api.empireflippers.com/api/v1/listings/list?sort=${sortType}&order=${order}`)
      .then((response) => {
        res.send(response.data);
      });
  } catch (error) {
    res.send({ msg: 'An error has occured' });
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
