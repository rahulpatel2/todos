import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'

class TodoList extends Component {
  render() {
    return (
      <div>
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        )}
      </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: getTodos(state)
})

const getTodos = state => {
  if (state.visibilityFilter === "SHOW_COMPLETED"){
    return state.todos.filter((todo) => todo.completed === true)
  }
  else if (state.visibilityFilter === "SHOW_NOT_COMPLETED"){
    return state.todos.filter((todo) => todo.completed === false)
  }
  else {
  return state.todos
  }
}

export default connect(mapStateToProps, null)(TodoList)