const knex = require('knex');
const knexfile = require('./knexfile');
const { Model } = require('objection');

function setupDb() {
    const db = knex(knexfile.development);
    Model.knex(db); // globally install db into all models
}

module.exports = setupDb;

