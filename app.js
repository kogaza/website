import rectangle from './rectangle'

var projectsBackground = document.querySelector('.projects');
var projects = document.querySelector('.projects .small-width');
var belt = document.querySelector('.belt');
var skillsBackground = document.querySelector('.skills');
var skills = document.querySelector('.skills .small-width');
var aboutme = document.querySelectorAll('.about-me article');
var aboutmeBackground = document.querySelector('.about-me');
var contact = document.querySelectorAll('.contacts a');
var contactBackground = document.querySelector('.contacts');
var icon = document.querySelectorAll('.contacts i');
var canvas = document.querySelector('.projects-and-canvas');
rectangle();

var menu = document.querySelectorAll('ul>li');
menu[0].addEventListener('click', function(){
  if(aboutme[0].classList.contains("hide-elem")){
    for(var i = 0; i < aboutme.length; i++) {
      aboutme[i].classList.add("show-elem");
      aboutme[i].classList.remove("hide-elem");
    }
  }
  belt.classList.add("belt");
  belt.classList.remove("hidden-belt");
  skillsBackground.classList.add("blue-belt");
  skills.classList.add("show-elem");
  skills.classList.remove("hide-elem");
  projectsBackground.classList.add("hide-projects");
  projectsBackground.classList.remove("blue-belt");
  projects.classList.add("hide-elem");
  projects.classList.remove("show-elem");
  projects.classList.remove("bg-projects");
  canvas.classList.remove("projects-and-canvas");
  
  if(contact[0].classList.contains('contact-move1')){
    contact[0].classList.remove('contact-move1');
    contact[0].classList.add('contact-move1-remove');
  }
  if(contact[1].classList.contains('contact-move2')){
    contact[1].classList.remove('contact-move2');
    contact[1].classList.add('contact-move2-remove');
  }
  if(contact[2].classList.contains('contact-move3')){
    contact[2].classList.remove('contact-move3');
    contact[2].classList.add('contact-move3-remove');
  }
  if(contact[3].classList.contains('contact-move4')){
    contact[3].classList.remove('contact-move4');
    contact[3].classList.add('contact-move4-remove');
  }
  if(screen.width < 1025) {
    aboutmeBackground.style.cssText = "";
    contactBackground.style.cssText = "";
    canvas.style.cssText = "";
    projectsBackground.classList.remove('blue-projects');
  }
})
menu[1].addEventListener('click',function(){
  skillsBackground.classList.remove("blue-belt");
  skills.classList.remove("show-elem");
  skills.classList.add("hide-elem");
  projectsBackground.classList.add("blue-belt");
  projectsBackground.classList.remove("hide-projects");
  if(projects.classList.contains("hide-elem")){
    projects.classList.add("show-elem");
    projects.classList.remove("hide-elem");
    projects.classList.add("bg-projects");
  }
  if(skills.classList.contains("show-elem")){
    skills.classList.add("hide-elem");
    skills.classList.remove("show-elem");
    skills.classList.remove("skills-background");
  }
  if(aboutme[0].classList.contains("hide-elem")){
    for(var i = 0; i < aboutme.length; i++) {
      aboutme[i].classList.add("show-elem");
      aboutme[i].classList.remove("hide-elem");
      }
  };
  if(contact[0].classList.contains('contact-move1')){
    contact[0].classList.remove('contact-move1');
    contact[0].classList.add('contact-move1-remove');
  }
  if(contact[1].classList.contains('contact-move2')){
    contact[1].classList.remove('contact-move2');
    contact[1].classList.add('contact-move2-remove');
  }
  if(contact[2].classList.contains('contact-move3')){
    contact[2].classList.remove('contact-move3');
    contact[2].classList.add('contact-move3-remove');
  }
  if(contact[3].classList.contains('contact-move4')){
    contact[3].classList.remove('contact-move4');
    contact[3].classList.add('contact-move4-remove');
  }
  belt.classList.add("belt");
  belt.classList.remove("hidden-belt");
  canvas.classList.remove("projects-and-canvas");
  if(screen.width < 1025) {
    aboutmeBackground.style.cssText = "";
    contactBackground.style.cssText = "";
    canvas.style.cssText = "";
    projectsBackground.classList.remove('blue-projects');
  }
})
menu[2].addEventListener('click',function(){
  canvas.classList.remove("projects-and-canvas");
  projects.classList.add("hide-elem");
  projects.classList.remove("show-elem");
  projects.classList.remove("bg-projects");
  belt.classList.remove("belt");
  belt.classList.add("hidden-belt");
  for(var i = 0; i < aboutme.length; i++) {
    aboutme[i].classList.remove("show-elem");
    aboutme[i].classList.add("hide-elem");    
  }
  skills.classList.remove("show-elem");;
  skills.classList.remove("skills-background");
  skills.classList.add("hide-elem");
  contact[0].classList.remove('contact-move1-remove');
  contact[0].classList.add('contact-move1');
  contact[1].classList.remove('contact-move2-remove');
  contact[1].classList.add('contact-move2');
  contact[2].classList.remove('contact-move3-remove');
  contact[2].classList.add('contact-move3');
  contact[3].classList.remove('contact-move4-remove');
  contact[3].classList.add('contact-move4');
  if(screen.width < 1025) {
    aboutmeBackground.style.cssText = "height: 0";
    contactBackground.style.cssText = "height: 50px";
    canvas.style.cssText = "height: 0";
    projectsBackground.classList.add('blue-projects');
    skillsBackground.classList.remove("blue-belt");
  }
})