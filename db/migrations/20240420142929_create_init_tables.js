
exports.up = function(knex) {
    return knex.schema
    .createTable('users', (table) => {
        table.increments('user_id').primary(); 
        table.string("honorific").notNullable();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.integer('graduation_year').notNullable();
        table.text('bio').notNullable();
        table.string("user_type").notNullable();
    })

    .createTable('courses', (table) => {
        table.increments('course_id');
        table.string('course_number').notNullable();
        table.string('course_name').notNullable();

        table.bigint("user_id_ref")
            .references("user_id")
            .inTable("users")
            .onDelete("CASCADE");

        table.integer('academic_year').notNullable();
        table.integer('term').notNullable();
        table.text('course_description').notNullable();
        table.string('course_level').notNullable();
    })

    .createTable('exhibitions', (table) => {
        table.increments('exhibition_id').primary(); 

        table.bigint('user_id_ref').notNullable()
            .references("user_id")
            .inTable("users")
            .onDelete("CASCADE");

        table.bigint('course_id_ref').notNullable()
            .references("course_id")
            .inTable("courses")
            .onDelete("CASCADE");

        table.boolean('display_on_home_page').notNullable();
        table.text('description').notNullable();
        table.string('video_html_code').notNullable();
    })

    .createTable('skills', (table) => {
        table.increments('skill_id').primary();
        table.string('skill_name').notNullable(); 
        table.text('skill_description').notNullable();
        table.string('throughline').notNullable();
    })

    .createTable('exhibitionSkillPairs', (table) => {
        table.bigint('exhibition_id_ref').notNullable()
            .references("exhibition_id")
            .inTable("exhibitions")
            .onDelete("CASCADE");

        table.bigint('skill_id_ref').notNullable()
            .references("skill_id")
            .inTable("skills")
            .onDelete("CASCADE");
    })
    ;
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('exhibitionSkillPairs')
    .dropTableIfExists('skills')
    .dropTableIfExists('exhibitions')
    .dropTableIfExists('courses')
    .dropTableIfExists('users');
};