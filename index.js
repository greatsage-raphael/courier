// Dependencies to install:
// $ npm install node-fetch --save

import fetch from 'node-fetch';

const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer pk_test_5FN3Z3VT194PNTQWZ4WF0MB3FZ5M'
  },
  body: JSON.stringify({
    "message": {
      "template": "NOTIFICATION_TEMPLATE"
    }
  })
};

fetch('https://api.courier.com/send', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));