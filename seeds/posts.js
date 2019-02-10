
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, title: '', content: '', comment: '',user_id: 1, action: true},
        {id: 2, title: '', content: '', comment: '',user_id: 2, action: true},
        {id: 3, title: '', content: '', comment: '',user_id: 3, action: true}
      ]);
    });
};
