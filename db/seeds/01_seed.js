exports.seed = async function(knex) {
  // SEED ALL THE OTHER TABLES


  // Deletes ALL existing entries
  await knex('users').del()
  await knex('courses').del()
  await knex('exhibitions').del()
  await knex('skills').del()
  await knex('exhibitionSkillPairs').del()

  // Inserts seed entries

  await knex('users').insert([
      {user_id: 103, honorific: 'Dr.', first_name: "Nick", last_name: "Zufelt", graduation_year: 0, bio: "I love to teach...", user_type: "Teacher"},
      {user_id: 104, honorific: 'Mrs.', first_name: "", last_name: "Clarke", graduation_year: 0, bio: "I love to teach...", user_type: "Teacher"},
      {user_id: 101, honorific: '', first_name: "Emma", last_name: "Capaldi", graduation_year: 2025, bio: "In my free time ...", user_type: "Student"},
      {user_id: 102, honorific: '', first_name: "Hannah", last_name: "Chen", graduation_year: 2025, bio: "Super cool", user_type: "Student"},
  ]);

  await knex('courses').insert([
    {course_id: 10001, course_number: "CSC573", course_name: 'Project-Based Term of CS', user_id_ref: 103, academic_year: 2023, term: 1, course_description: "In this class ... ", course_level:"Advanced"},
    {course_id: 10002, course_number: "CSC401", course_name: 'Web Dev', user_id_ref: 104, academic_year: 2022, term: 1, course_description: "In this class ... ", course_level:"Advanced"},
  ]);

  await knex('exhibitions').insert([
    {exhibition_id: 1001, user_id_ref: 102, course_id_ref: 10001, display_on_home_page: true, description: "In this video...",video_html_code:"https://"},
    {exhibition_id: 1002, user_id_ref: 101, course_id_ref: 10001, display_on_home_page: false, description: "In this video...",video_html_code:"https://"},
    {exhibition_id: 1003, user_id_ref: 101, course_id_ref: 10002, display_on_home_page: false, description: "In this video...",video_html_code:"https://"},
  ]);

  await knex('skills').insert([
    {skill_id: 1, skill_name: "Speaking in Translations", skill_description: "This skill ...", throughline: "Human Communication"},
    {skill_id: 2, skill_name: "Refactoring Code", skill_description: "This skill ...", throughline: "Writing Code"},
  ]);
  
  await knex('exhibitionSkillPairs').insert([
    {exhibition_id_ref: 1001, skill_id_ref: 1},
    {exhibition_id_ref: 1001, skill_id_ref: 2},
    {exhibition_id_ref: 1002, skill_id_ref: 1},
    {exhibition_id_ref: 1002, skill_id_ref: 2},
    {exhibition_id_ref: 1003, skill_id_ref: 1},
    {exhibition_id_ref: 1003, skill_id_ref: 2},
  ]);
};