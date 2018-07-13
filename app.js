var projects = document.querySelector('.projects');
var skills = document.querySelector('.skills');

var menu = document.querySelectorAll('ul>li');
menu[0].addEventListener('click', function(){
  console.log(projects);
  projects.classList.add("project-aboutme");
  skills.classList.add("project-skills");
})