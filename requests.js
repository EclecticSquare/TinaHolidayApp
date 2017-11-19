

const Sequelize = require('sequelize');
sequelize = new Sequelize('postgres://tinabryson@localhost:5432/shoppinghero_db');


let express = require('express');
let bodyParser = require('body-parser');
let url = require('url');

let app = express()
app.use(bodyParser.json()); //takes the binary and changes it into language we can understand

//Shows want an instance for each table should look like
const Person = sequelize.define('person', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(30)
  }
});

const Items = sequelize.define('items', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(30)
  },
  person_id: {
    type: Sequelize.INTEGER
  }
});


//Takes information given from the user and inserts into the table/database/model
app.post('/person/create', (request, response) => {
  let newPerson = request.body
  Person.create(
    newPerson
  ).then((results) => {
    response.json(results)
  });
});







// TEST!!!!
// app.get('/test', (request, response) => {
//   response.send("Testing Shopper's Hero")
// })


// tell app what port to listen for
app.listen(3000, () => {
  console.log('I can hear you!')
})

// ---------------------------------------------