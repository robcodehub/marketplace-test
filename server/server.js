const express = require('express');

const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Serverless functions using Google Cloud Functions
// Included as example, these endpoints can be changed to EF endpoints
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

// **EF Server Endpoints**

// GET - All listings for sale
// Get the first 90 listings on page 1 listed for sale
app.get('/api/allsalelistings', async (req, res) => {
  try {
    await axios
      .get(
        'https://api.empireflippers.com/api/v1/listings/list?page=1&limit=90&listing_status=For%20Sale'
      )
      .then((response) => {
        res.send(response.data);
      });
  } catch (error) {
    res.send({ msg: 'An error has occured' });
  }
});

// GET - Listing by listing number
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

// GET - Sort listing by type & ascending / descending
app.get('/api/listings/:sortType/:order', async (req, res) => {
  const { sortType, order } = req.params;

  try {
    await axios
      .get(
        `https://api.empireflippers.com/api/v1/listings/list?sort=${sortType}&order=${order}&page=1&limit=90&listing_status=For%20Sale`
      )
      .then((response) => {
        res.send(response.data);
      });
  } catch (error) {
    res.send({ msg: 'An error has occured' });
  }
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
