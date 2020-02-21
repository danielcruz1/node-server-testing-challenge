const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(superhero) {
  const [id] = await db('superheros').insert(superhero, 'id');

  return db('superheros')
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('superheros');
}

function findById(id) {
  return null;
}