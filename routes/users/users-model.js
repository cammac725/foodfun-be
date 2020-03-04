const db = require('../../data/dbConfig');

module.exports = {
  addUser,
  getAll,
  findBy,
  findById,
  remove
}

function getAll() {
  return db('users');
};

function findBy(filter) {
  return db('users').where(filter);
};

function findById(id) {
  return db('users')
    .select('id', 'username')
    .where({ id })
    .first();
};

async function addUser(user) {
  const [id] = await db('users').insert(user);
  return findById(id);
};

function remove(id) {
  return db('users')
    .where({ id })
    .del();
};