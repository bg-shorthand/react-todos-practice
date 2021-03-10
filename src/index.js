import React from 'react';
import ReactDOM from 'react-dom';
import ButtonApp from './button/ButtonApp';
import svgURL from "./button/utils/utils";
import { buttons } from "./button/state/state.json";

console.log(buttons);

ReactDOM.render(
  <React.StrictMode>
    {buttons.map(v => <ButtonApp text={v.text} svgURL={svgURL(v.svgURL)}/>)}
  </React.StrictMode>,
  document.getElementById('root')
);
















/* <body>
    <div class="container">
      <h1 class="title">Todos</h1>
      <div class="ver">3.0</div>

      <input class="input-todo" placeholder="What needs to be done?" autofocus />
      <ul class="nav">
        <li id="all" class="active">All</li>
        <li id="active">Active</li>
        <li id="completed">Completed</li>
      </ul>
      <ul class="todos">
        <!-- <li id="1" class="todo-item">
          <input id="ck-1" class="checkbox" type="checkbox">
          <label for="ck-1">HTML</label>
          <i class="remove-todo far fa-times-circle"></i>
        </li> -->
      </ul>
      <footer>
        <div class="complete-all">
          <input class="checkbox" type="checkbox" id="ck-complete-all" />
          <label for="ck-complete-all">Mark all as complete</label>
        </div>
        <div class="clear-completed">
          <button class="btn">Clear completed (<span class="completed-todos">0</span>)</button>
          <strong class="active-todos">0</strong> items left
        </div>
      </footer>
    </div>
  </body> */