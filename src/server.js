const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const Base64 = require('js-base64');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/token', (req, res) => {
  if (req?.body?.email && req?.body?.password) {
    const header = {
      "alg": "HS256",
      "typ": "JWT"
    };
    const payload = {
      "id": uuid.v4(),
      "email": req.body.email,
      "name": "John Smith",
    };
    const token = generateTocken({ header: { ...header }, payload: { ...payload } });
    return res.send({ statusText: 'OK', token: token })
  }
  res.send({ statusText: 'no OK', message: 'No valid data' });
})

const generateTocken = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET_SIGNATURE, { expiresIn: '30 days' });
  return token;
}

app.post('/check', (req, res) => {
  if (req.body) {
    jwt.verify(req.body.token, process.env.SECRET_SIGNATURE, (err, decode) => {
      if (err){
        return res.send({ auth: false });
      }
      return res.send({ auth: true });
    });
    
  };
})

const port = 4000;
app.listen(port, () => {
  console.log(`listen port: ${port}`);
})