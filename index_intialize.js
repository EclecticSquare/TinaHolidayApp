const Sequelize = require('sequelize');
sequelize = new Sequelize('postgres://tinabryson@localhost:5432/shoppinghero_db');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database', err);
  });

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

Person.sync({force: true}).then(() => {
  return Person.create({
    id: 1,
    name: 'TestPerson_1'
  });
});

Items.sync({force: true}).then(() => {
  return Items.create({
    id: 1,
    name: 'TestItem_1',
    person_id: 1
  });
});
