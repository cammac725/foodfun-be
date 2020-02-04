
exports.seed = function(knex, Promise) {
  
  return knex('users').insert([
    { username: "jon", password: "ghost" },
    { username: "arya", password: "nymeria"}
  ]);
};
