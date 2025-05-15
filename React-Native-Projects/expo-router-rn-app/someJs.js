const section = document.querySelector('section');
const itemsList = document.querySelector('ul');
const item = document.createElement('li');
const otherItem = item.cloneNode(false);
item.textContent = 'Learn Js';
otherItem.textContent = 'Master Js';

itemsList.append(item, otherItem);

const toggler = document.querySelector('button');


toggler.addEventListener('click', () => {
    section.classList.toggle('invisible')
})

// add new container to the dom

const scheduleContainer = document.createElement('div');
scheduleContainer.classList.add('schedule-container');
const buttonContainer = section.nextElementSibling;
buttonContainer.classList.add('button-container');

// buttonContainer.prepend(scheduleContainer);