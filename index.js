const alfy = require('alfy');

var request = require('request');

request({
  method: 'POST',
  url: 'https://api.clickup.com/api/v2/list/'+process.env.list+'/task',
  headers: {
    'Authorization': process.env.apiToken,
    'Content-Type': 'application/json'
  },
  body: {
    'name': alfy.input
  },
  json: true
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});

alfy.log(body)
