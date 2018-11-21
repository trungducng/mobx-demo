import React from "react";
import { render } from "react-dom";

import TodoList from "./TodoList";

render(
  <div>
    <TodoList/>
  </div>,
  document.getElementById("root")
);

// store.addTodo("Get Coffee");
// store.addTodo("Write simpler code");
// store.todos[0].finished = true;

// setTimeout(() => {
//   store.addTodo("Get a cookie as well");
// }, 2000);

// // playing around in the console
// window.store = store;
