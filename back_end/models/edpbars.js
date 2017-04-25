const pgp = require('pg-promise')({});
const db = require('../db');

const edpBars = {};

edpBars.findAll = () => {
  return db.manyOrNone('SELECT * FROM edpBars');
};

edpBars.create = (name, locality, latitude, longitude, featured_image, cuisine) => {
  return db.one(
    'INSERT INTO edpBars(name, locality, latitude, longitude, featured_image, cuisine) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [name, locality, latitude, longitude, featured_image, cuisine]
    );
};

edpBars.destroy = (id) => {
  return db.none(
    'DELETE FROM edpBars WHERE id = $1', [id]
  );
}

module.exports = edpBars;
