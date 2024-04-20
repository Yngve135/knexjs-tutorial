exports.up = function (knex) {
    return knex.schema.createTable('student', (table) => {
      table.increments();
      table.string('student_id').notNullable(); // uuid?
      table.string('student_first_name').notNullable();
      table.string('student_last_name').notNullable();
      table.string('student_graduation_year').notNullable();
      table.text('student_bio').notNullable();
    });
  };

exports.down = function (knex) {
return knex.schema.dropTable('student');
};