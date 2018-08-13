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
const contactsSmall = document.querySelector('.contacts .small-width');
const contactsElements = document.querySelectorAll('.contacts-element');
const contactsBackground = document.querySelector('.contacts');
const canvas = document.querySelector('.projects-and-canvas');
const seeMore = document.querySelector('.see-more');
rectangle();

for (let i = 4; i < projectsArticles.length - 1; i++) {
  projectsArticles[i].style.display = 'none';
}

const menu = document.querySelectorAll('ul>li');
seeMore.addEventListener('click', function () {

  if (screen.width >= 1024) {
    belt[0].classList.remove("belt-color2");
    belt[0].classList.add("belt-color1");
    for (var i = 0; i < aboutme.length; i++) {
      aboutme[i].classList.remove("show-elem");
      aboutme[i].classList.add("hide-elem");
    }
    projectsArticles[0].classList.add('project-move0');
    projectsArticles[1].classList.add('project-move1');
    projectsArticles[2].classList.add('project-move2');
    projectsArticles[3].classList.add('project-move3');
    projectsArticles[4].classList.add('project-move4');
    projectsArticles[5].style.display = 'none';
  } else {
    aboutmeBackground.style.height = '0';
    projectsArticles[projectsArticles.length - 1].style.display = 'none';
    for (let i = 0; i < aboutme.length; i++) {
      aboutme[i].classList.add('hide-elem');
      if (i < belt.length) {
        belt[i].style.display = 'none';
      }
    }
    for (let i = 1; i < projectsArticles.length - 1; i++) {
      if (i >= 4) {
        projectsArticles[i].style.cssText = '';
      }
      projectsArticles[i].style.width = '60%';
    }
    skills.classList.remove("show-elem");
    skills.classList.add("hide-elem");
    skillsBackground.style.height = '0';
    projectsArticles[0].style.fontSize = '40px';
  }
});
menu[0].addEventListener('click', function () {
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

  skills.classList.add("show-elem");
  skills.classList.remove("hide-elem");
  aboutmeBackground.style.cssText = '';
  for (let i = 0; i < belt.length; i++) {
    belt[i].style.cssText = '';
  }
  for (let i = 1; i < projectsArticles.length; i++) {
    projectsArticles[i].style.cssText = '';
    if (i >= 4 && i < projectsArticles.length - 1) {
      projectsArticles[i].style.display = 'none';
    }
  }
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
    projectsBackground.classList.add("hide-projects");
    projectsBackground.classList.remove("blue-belt");
    projects.classList.add("hide-elem");
    projects.classList.remove("show-elem");
    projects.classList.remove("bg-projects");
    canvas.classList.remove("projects-and-canvas");
  } else {

    for (let i = 0; i < aboutme.length; i++) {
      aboutme[i].classList.remove('hide-elem');
      if (i < belt.length) {
        belt[i].style.display = 'block';
      }
    }
    projectsBackground.style.cssText = '';
    skillsBackground.style.cssText = '';
    skills.classList.add("show-elem");
    skills.classList.remove("hide-elem");
    projects.classList.add("show-elem");
    projects.classList.remove("hide-elem");
    contactsSmall.classList.remove('blue-background');
    for (let i = 0; i < contacts.length; i++) {
      contactsElements[i].style.cssText = '';
    }
  }
})
menu[1].addEventListener('click', function () {
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
  projectsBackground.style.cssText = '';

  if (screen.width >= 1024) {
    skillsBackground.classList.remove("blue-belt");
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
    for (var i = 0; i < aboutme.length; i++) {
      aboutme[i].classList.remove("show-elem");
      aboutme[i].classList.add("hide-elem");
    }
    belt[0].classList.add("belt-color1");
    belt[0].classList.remove("belt-color2");
    canvas.classList.remove("projects-and-canvas");

    projectsArticles[0].classList.add('project-move0');
    projectsArticles[1].classList.add('project-move1');
    projectsArticles[2].classList.add('project-move2');
    projectsArticles[3].classList.add('project-move3');
    projectsArticles[4].classList.add('project-move4');
    projectsArticles[5].style.display = 'none';

  } else {
    for (let i = 0; i < belt.length; i++) {
      belt[i].style.cssText = '';
    }
    for (let i = 0; i < aboutme.length; i++) {
      aboutme[i].classList.add('hide-elem');
      aboutme[i].classList.remove('show-elem');
      if (i < belt.length) {
        belt[i].style.display = 'none';
      }
    }
    for (let i = 1; i < projectsArticles.length - 1; i++) {
      if (i >= 4) {
        projectsArticles[i].style.cssText = '';
      }
      projectsArticles[i].style.width = '60%';
    }
    skillsBackground.style.height = '0';
    aboutmeBackground.style.height = '0';
    projectsBackground.style.cssText = '';
    projectsArticles[0].style.fontSize = '40px';
    projectsArticles[projectsArticles.length - 1].style.display = 'none';
    for (let i = 1; i < projectsArticles.length - 1; i++) {
      projectsArticles[i].style.width = '60%';
    }
    skills.classList.add("show-elem");
    skills.classList.remove("hide-elem");
    projects.classList.add("show-elem");
    projects.classList.remove("hide-elem");
    contactsSmall.classList.remove('blue-background');
    for (let i = 0; i < contacts.length; i++) {
      contactsElements[i].style.cssText = '';
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
  } else {
    for (let i = 0; i < aboutme.length; i++) {
      aboutme[i].classList.remove('hide-elem');
      if (i < belt.length) {
        belt[i].style.display = 'block';
      }
    }
    projectsBackground.style.height = '300px';
    skills.classList.add("show-elem");
    skills.classList.remove("hide-elem");
    skillsBackground.style.cssText = '';
    aboutmeBackground.style.cssText = '';
    for (let i = 1; i < projectsArticles.length; i++) {
      projectsArticles[i].style.cssText = '';
    }
    skills.classList.remove("show-elem");
    skills.classList.add("hide-elem");
    projects.classList.remove("show-elem");
    projects.classList.add("hide-elem");
    belt[1].style.display = 'none';
    belt[2].style.display = 'block';
    contactsSmall.classList.add('blue-background');
    for (let i = 0; i < contacts.length; i++) {
      contactsElements[i].style.width = '60%';
    }
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