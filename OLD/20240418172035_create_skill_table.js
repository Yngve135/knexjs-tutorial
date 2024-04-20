exports.up = function (knex) {
  return knex.schema.createTable('skills', (table) => {
    table.increments();
    table.string('skill_id').notNullable(); // uuid?
    table.string('skill_name').notNullable();
    table.text('skill_description').notNullable();
    table.string('throughline').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('skills');
};