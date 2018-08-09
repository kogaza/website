import rectangle from './rectangle'

const projectsBackground = document.querySelector('.projects');
const projects = document.querySelector('.projects .small-width');
const projectsArticles = projects.querySelectorAll('article');
const belt = document.querySelectorAll('.belt');
const skillsBackground = document.querySelector('.skills');
const skills = document.querySelector('.skills .small-width');
const aboutmeBackground = document.querySelector('.about-me');
const aboutme = document.querySelectorAll('.about-me article');
const contacts = document.querySelectorAll('.contacts a');
const contactsElements = document.querySelectorAll('.contacts-element');
const canvas = document.querySelector('.projects-and-canvas');
rectangle();

const menu = document.querySelectorAll('ul>li');
menu[0].addEventListener('click', function () {
  if (screen.width >= 1024) {
    if (aboutme[0].classList.contains("hide-elem")) {
      for (let i = 0; i < aboutme.length; i++) {
        aboutme[i].classList.add("show-elem");
        aboutme[i].classList.remove("hide-elem");
      }
    }
    belt[0].classList.remove("belt-color1");
    belt[0].classList.add("belt-color2");
    skillsBackground.classList.add("blue-belt");
    skills.classList.add("show-elem");
    skills.classList.remove("hide-elem");
    projectsBackground.classList.add("hide-projects");
    projectsBackground.classList.remove("blue-belt");
    projects.classList.add("hide-elem");
    projects.classList.remove("show-elem");
    projects.classList.remove("bg-projects");
    canvas.classList.remove("projects-and-canvas");
    
    if (contacts[0].classList.contains('contact-move1')) {
      contacts[0].classList.remove('contact-move1');
      contacts[0].classList.add('contact-move1-remove');
    }
    if (contacts[1].classList.contains('contact-move2')) {
      contacts[1].classList.remove('contact-move2');
      contacts[1].classList.add('contact-move2-remove');
    }
    if (contacts[2].classList.contains('contact-move3')) {
      contacts[2].classList.remove('contact-move3');
      contacts[2].classList.add('contact-move3-remove');
    }
    if (contacts[3].classList.contains('contact-move4')) {
      contacts[3].classList.remove('contact-move4');
      contacts[3].classList.add('contact-move4-remove');
    }
  } else {
    for(let i = 0; i < aboutme.length; i++){
      aboutme[i].classList.remove('hide-elem');
      if(i < belt.length) {
        belt[i].style.display = 'block';
      }
    }
    skills.classList.add("show-elem");
    skills.classList.remove("hide-elem");
    skillsBackground.style.cssText = '';
    aboutmeBackground.style.cssText = '';
    for(let i = 1; i < projectsArticles.length - 1; i++){
      projectsArticles[i].style.cssText = '';
    }
  }
})
menu[1].addEventListener('click', function () {
  if (screen.width >= 1024) {
    skillsBackground.classList.remove("blue-belt");
    skills.classList.remove("show-elem");
    skills.classList.add("hide-elem");
    projectsBackground.classList.add("blue-belt");
    projectsBackground.classList.remove("hide-projects");
    if (projects.classList.contains("hide-elem")) {
      projects.classList.add("show-elem");
      projects.classList.remove("hide-elem");
      projects.classList.add("bg-projects");
    }
    if (skills.classList.contains("show-elem")) {
      skills.classList.add("hide-elem");
      skills.classList.remove("show-elem");
      skills.classList.remove("skills-background");
    }
    if (aboutme[0].classList.contains("hide-elem")) {
      for (let i = 0; i < aboutme.length; i++) {
        aboutme[i].classList.add("show-elem");
        aboutme[i].classList.remove("hide-elem");
      }
    };
    if (contacts[0].classList.contains('contact-move1')) {
      contacts[0].classList.remove('contact-move1');
      contacts[0].classList.add('contact-move1-remove');
    }
    if (contacts[1].classList.contains('contact-move2')) {
      contacts[1].classList.remove('contact-move2');
      contacts[1].classList.add('contact-move2-remove');
    }
    if (contacts[2].classList.contains('contact-move3')) {
      contacts[2].classList.remove('contact-move3');
      contacts[2].classList.add('contact-move3-remove');
    }
    if (contacts[3].classList.contains('contact-move4')) {
      contacts[3].classList.remove('contact-move4');
      contacts[3].classList.add('contact-move4-remove');
    }
    belt[0].classList.remove("belt-color1");
    belt[0].classList.add("belt-color2");
    canvas.classList.remove("projects-and-canvas");
  } else {
    for(let i = 0; i < aboutme.length; i++){
      aboutme[i].classList.add('hide-elem');
      if(i < belt.length) {
        belt[i].style.display = 'none';
      }
    }
    skills.classList.remove("show-elem");
    skills.classList.add("hide-elem");
    skillsBackground.style.height = '0';
    aboutmeBackground.style.height = '0';
    projectsArticles[0].style.fontSize = '40px';
    for(let i = 1; i < projectsArticles.length - 1; i++){
      projectsArticles[i].style.width = '60%';
    }
  }
})
menu[2].addEventListener('click', function () {
  if (screen.width >= 1024) {
    canvas.classList.remove("projects-and-canvas");
    projects.classList.add("hide-elem");
    projects.classList.remove("show-elem");
    projects.classList.remove("bg-projects");
    belt[0].classList.remove("belt-color2");
    belt[0].classList.add("belt-color1");
    for (var i = 0; i < aboutme.length; i++) {
      aboutme[i].classList.remove("show-elem");
      aboutme[i].classList.add("hide-elem");
    }
    skills.classList.remove("show-elem");;
    skills.classList.remove("skills-background");
    skills.classList.add("hide-elem");
    contacts[0].classList.remove('contact-move1-remove');
    contacts[0].classList.add('contact-move1');
    contacts[1].classList.remove('contact-move2-remove');
    contacts[1].classList.add('contact-move2');
    contacts[2].classList.remove('contact-move3-remove');
    contacts[2].classList.add('contact-move3');
    contacts[3].classList.remove('contact-move4-remove');
    contacts[3].classList.add('contact-move4');
  }

})