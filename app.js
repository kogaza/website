var projects = document.querySelector('.projects>.small-width');
var belt = document.querySelector('.belt');
var skills = document.querySelector('.skills');
var aboutme = document.querySelectorAll('.about-me article');
var contact = document.querySelectorAll('footer>.small-width>div>a');
var icon = document.querySelectorAll('footer>.small-width>div>a>i');


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
})
menu[2].addEventListener('click',function(){
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
})