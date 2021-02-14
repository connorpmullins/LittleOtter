const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const BASE_URL = "http://country.io";
const allowedEndpoints = ['continent', 'names', 'iso3', 'capital', 'phone', 'currency'];

const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({
    extended: false
}));
app.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        greeting: `Hello ${name}!`
    }));
});

app.get('/api/:type', (req, res) => {
    const type = req.params.type;
    if (allowedEndpoints.includes(type)) {
        request(`${BASE_URL}/${type}.json`, (err, response, body) => {
            if (err) {
                return console.log(err);
            }
            res.send(body);
        });
    }
})

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);
