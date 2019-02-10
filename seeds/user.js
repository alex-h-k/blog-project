
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, name:'test1', email: 'testUser1@example.com', password: '123', blog: 0},
        {id: 2, name:'test2', email: 'testUser2@example.com', password: '456', blog: 0},
        {id: 3, name:'test3', email: 'testUser3@example.com', password: '789', blog: 0}
      ]);
    });
};
