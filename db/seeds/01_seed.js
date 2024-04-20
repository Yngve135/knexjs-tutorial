exports.seed = async function(knex) {
  // SEED ALL THE OTHER TABLES


  // Deletes ALL existing entries
  await knex('skills').del()
  await knex('courses').del()
  await knex('students').del()
  await knex('exhibitions').del()

      // Inserts seed entries
  await knex('skills').insert([
    {skill_id: "1", skill_name: 'Speaking in Translations', skill_description: "This skill ...", throughline:"Human Communication"},
    {skill_id: "2", skill_name: 'Refactoring Code', skill_description: "This skill ...", throughline:"Writing Code"},
  ]);

  await knex('courses').insert([
    {course_id: "CSC573", course_name: 'Project-Based', course_description: "In this class ... ", course_level:"Advanced"},
    {course_id: "CSC401", course_name: 'Web Dev', course_description: "In this class ... ", course_level:"Beginner"},
  ]);

  await knex('students').insert([
    {student_id: "101", student_first_name: 'Emma', student_last_name: "Capaldi", student_graduation_year: "2025", student_bio:"I love ..."},
    {student_id: "102", student_first_name: 'Hannah', student_last_name: "Chen", student_graduation_year: "2025", student_bio:"Super cool"},
  ]);

  await knex('exhibitions').insert([
    {exhibition_id: "1001", student_id: '102', course_id: "CSC573", teacher_name:"Dr. Zufelt", first_skill_id: "1", second_skill_id: "2", school_year: "2023-2024", term: "Fall", display_on_home_page: true, description:"In this video...",video_html_code:"https://"},
    {exhibition_id: "1002", student_id: '101', course_id: "CSC401", teacher_name:"Dr. Zufelt", first_skill_id: "5", second_skill_id: "7", school_year: "2022-2023", term: "Winter", display_on_home_page: false, description:"In this video...",video_html_code:"https://"},
    {exhibition_id: "1003", student_id: '101', course_id: "CSC401", teacher_name:"Mrs. Clarke", first_skill_id: "10", second_skill_id: "14", school_year: "2022-2023", term: "Spring", display_on_home_page: false, description:"In this video...",video_html_code:"https://"},
  ]);
};