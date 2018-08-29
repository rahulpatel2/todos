import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {

  render() {
    return (
      <div>
        <div>
          <input id="todo_text"/>
          <button type="submit" onClick={this.props.addTodoOnList}>
            Add Todo
          </button>
        </div>
    </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    addTodoOnList: ()=>{
      var input = document.getElementById("todo_text");
      if (input.value.length !== 0){
        dispatch(addTodo(input.value));
      }
      input.value = "";
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);
