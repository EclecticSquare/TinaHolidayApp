// GET REQUEST ------------------------------

let express = require('express');
let bodyParser = require('body-parser');
let url = require('url');

let app = express()
app.use(bodyParser.json());


// STATUS
app.get('/status', (request, response) => {
    response.send('{"status": "on" }')
})

// TEST!!!!
// app.get('/test', (request, response) => {
//   response.send("Testing Shopper's Hero")
// })


// tell app what port to listen for
app.listen(3000, () => {
  console.log('Listening on port 3000')
})

// ---------------------------------------------