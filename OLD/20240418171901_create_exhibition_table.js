exports.up = function (knex) {
  return knex.schema.createTable('exhibitions', (table) => {
    table.increments();
    table.string('exhibition_id').notNullable(); // uuid?
    table.string('student_id').notNullable(); // uuid?
    table.string('course_id').notNullable(); // uuid?
    table.string('teacher_name').notNullable();
    table.string('first_skill_id').notNullable(); //uuid?
    table.string('second_skill_id').notNullable(); //uuid?
    table.string('school_year').notNullable();
    table.string('term').notNullable();
    table.boolean('display_on_home_page').notNullable();
    table.text('description').notNullable();
    table.string('video_html_code').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('exhibitions');
};