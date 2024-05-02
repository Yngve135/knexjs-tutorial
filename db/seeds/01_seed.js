// seeds some preliminary data

exports.seed = async function(knex) {
  // Deletes all existing entries
  await knex('users').del()
  await knex('admins').del()
  await knex('courses').del()
  await knex('exhibitions').del()
  await knex('skills').del()
  await knex('exhibitionSkillPairs').del()

  // inserts seed entries into data tables 
  await knex('users').insert([
      {user_id: 101, email: 'ecapaldi@andover.edu', first_name: "Emma", last_name: "Capaldi", graduation_year: 2025, bio: "In my free time ..."},
      {user_id: 102, email: 'hchen@andover.edu', first_name: "Hannah", last_name: "Chen", graduation_year: 2025, bio: "Super cool"},
  ]);

  await knex('admins').insert([
    {admin_id: 103, email: 'nzufelt@andover.edu', password: "password", name: "Nick Zufelt", bio: "I love to teach..."},
    {admin_id: 104, email: 'mclarke@andover.edu', password: "password", name: "Mrs. Clarke", bio: "I love to teach..."},
  ]);

  await knex('courses').insert([
    {course_id: 10001, course_number: "CSC573", course_name: 'Project-Based Term of CS', course_description: "In this class ... ", course_level:"Advanced"},
    {course_id: 10002, course_number: "CSC401", course_name: 'Web Dev', course_description: "In this class ... ", course_level:"Advanced"},
  ]);

  await knex('classes').insert([
    {class_id: 1, course_id_ref: 10001, admin_id_ref: 103, academic_year: 2023, term: 1},
    {class_id: 2, course_id_ref: 10002, admin_id_ref: 104, academic_year: 2022, term: 2},
  ]);

  await knex('exhibitions').insert([
    {exhibition_id: 1001, user_id_ref: 102, class_id_ref: 1, display_on_home_page: true, description: "In this video...",video_html_code:'<iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1188822/sp/118882200/embedIframeJs/uiconf_id/25697092/partner_id/1188822?iframeembed=true&playerId=kaltura_player&entry_id=1_ofiuys05&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[hotspots.plugin]=1&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_4mlte2vv" width="400" height="285" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Screen Recording 2024-04-23 at 2.18.06 PM"></iframe>'},
    {exhibition_id: 1002, user_id_ref: 101, class_id_ref: 1, display_on_home_page: true, description: "In this video...",video_html_code:'<iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1188822/sp/118882200/embedIframeJs/uiconf_id/25697092/partner_id/1188822?iframeembed=true&playerId=kaltura_player&entry_id=1_ofiuys05&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[hotspots.plugin]=1&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_4mlte2vv" width="400" height="285" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Screen Recording 2024-04-23 at 2.18.06 PM"></iframe>'},
    {exhibition_id: 1003, user_id_ref: 101, class_id_ref: 2, display_on_home_page: true, description: "In this video...",video_html_code:'<iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1188822/sp/118882200/embedIframeJs/uiconf_id/25697092/partner_id/1188822?iframeembed=true&playerId=kaltura_player&entry_id=1_ofiuys05&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[hotspots.plugin]=1&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_4mlte2vv" width="400" height="285" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Screen Recording 2024-04-23 at 2.18.06 PM"></iframe>'},
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