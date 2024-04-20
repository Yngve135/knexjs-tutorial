exports.up = function (knex) {
    return knex.schema.createTable('courses', (table) => {
      table.increments();
      table.string('course_id').notNullable(); // uuid?
      table.string('course_name').notNullable();
      table.text('course_description').notNullable();
      table.string('course_level').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('courses');
};