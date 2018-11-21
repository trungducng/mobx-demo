import React, { Component } from 'react';
import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import TodoItem from './components/TodoItem';
import AddForm from './components/AddForm';

@observer
class TodoList extends Component {
  @observable todos = [];

  render() {
    return (
      <div>
        <AddForm todos={this.todos} />
        <hr />
        <ul>
          {
            this.todos.map((item, index) => {
              return (
                <TodoItem key={index} todo={item} />
              );  
            })
          }
        </ul>

        <hr />
        <p>The number of Done task is: {this.countDoneItem}</p>

      </div>
    );
  }

  @computed
  get countDoneItem() {
    return this.todos.filter(todo => todo.isDone==true).length;
  }
}

export default TodoList;
