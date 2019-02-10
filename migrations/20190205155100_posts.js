
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table) => {
  table.increments('id')
  table.string('title')
  table.string('content')
  table.string('comment')
  table.integer('user_id')
  table.boolean('action')
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
};
