
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('email')
    table.string('password')
    table.integer('blog')
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user')
};
