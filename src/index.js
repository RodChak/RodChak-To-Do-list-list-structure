/* eslint-disable max-classes-per-file */
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

class UI {
  static displayTasks() {
    const storedTasks = [
      {
        description: 'Wash the dishes',
        completed: '1',
        index: '1',
      },
      {
        description: 'clean the dishes',
        completed: '1',
        index: '2',
      },
    ];

    const tasks = storedTasks;

    tasks.forEach((task) => UI.addTaskToList(task));
  }

  static addTaskToList(task) {
    const toDoList = document.querySelector('.to-do-list');
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-div');
    const taskDiscription = document.createElement('p');
    const completeInput = document.createElement('input');
    completeInput.setAttribute('type', 'checkbox');
    const menu = document.createElement('span');
    menu.classList.add('menu');

    taskDiscription.innerHTML = `${task.description}`;
    menu.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAU0lEQVRIiWNgGAUEACOxCouLi48yMDBYQblHent7bYnRx0SCY6yQ2DbEaiLFArIAKRYcgTH+//9/mAZuGalgNJlS1YLRZEobMJpMqWrBaDKlDQAAQa0eBGIrOgIAAAAASUVORK5CYII=">';

    taskDiv.append(completeInput, taskDiscription, menu);
    toDoList.appendChild(taskDiv);
  }
}

document.addEventListener('DOMContentLoaded', UI.displayTasks);