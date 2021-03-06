
exports.up = function(knex) {
  return knex.schema.withSchema("meals").createTable("users", users => {
    users.increments();

    users
      .string("username", 128)
      .notNullable()
      .unique();

    users.string("password").notNullable();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users")
};
