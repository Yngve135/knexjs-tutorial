
exports.up = function(knex) {
    return knex.schema
    .createTable('exhibitions', (table) => {
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
      })
    .createTable('skills', (table) => {
        table.increments();
        table.string('skill_id').notNullable(); // uuid?
        table.string('skill_name').notNullable();
        table.text('skill_description').notNullable();
        table.string('throughline').notNullable();
    })
    .createTable('courses', (table) => {
        table.increments();
        table.string('course_id').notNullable(); // uuid?
        table.string('course_name').notNullable();
        table.text('course_description').notNullable();
        table.string('course_level').notNullable();
    })
    .createTable('students', (table) => {
        table.increments();
        table.string('student_id').notNullable(); // uuid?
        table.string('student_first_name').notNullable();
        table.string('student_last_name').notNullable();
        table.string('student_graduation_year').notNullable();
        table.text('student_bio').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('exhibitions')
    .dropTable('skills')
    .dropTable('courses')
    .dropTable('students');
};
