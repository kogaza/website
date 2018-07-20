var projects = document.querySelector('.projects');
var skills = document.querySelector('.skills');
var aboutme = document.querySelector('.about-me');
var contact = document.querySelectorAll('footer>.small-width>div>a');
var icon = document.querySelectorAll('footer>.small-width>div>a>i');

var menu = document.querySelectorAll('ul>li');
menu[0].addEventListener('click', function(){
  if(aboutme.classList.contains("hide-elem")){
    aboutme.classList.add("show-elem");
    aboutme.classList.remove("hide-elem");
  }
  skills.classList.add("show-elem");
  skills.classList.add("skills-background");
  skills.classList.remove("hide-elem");
  projects.classList.add("hide-elem");
  projects.classList.remove("show-elem");
  projects.classList.remove("bg-projects");
  
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
})
menu[1].addEventListener('click',function(){
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
  if(aboutme.classList.contains("hide-elem")){
    aboutme.classList.add("show-elem");
    aboutme.classList.remove("hide-elem");
  }
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
})
menu[2].addEventListener('click',function(){
  projects.classList.add("hide-elem");
  projects.classList.remove("show-elem");
  projects.classList.remove("bg-projects");
  aboutme.classList.remove("show-elem");
  aboutme.classList.add("hide-elem");
  skills.classList.remove("show-elem");
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
})