exports.seed = function(knex, Promise) {
  
  return knex('superheros')
    .truncate()
    .then(function() {
      return knex('superheros').insert([
        { name: 'Superman' },
        { name: 'Batman' },
        { name: 'Wonder Woman' },
        { name: 'Iron Man' },
      ]);
    });
};