import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

class Todo extends Component {
  toggle = (e) => {
    const id = e.target.id;
    this.props.toggleTodo(id)
  }

  render() {
    return (
      <li onClick={(e) => this.toggle(e)}
        style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}
        id={this.props.id}
      >
        {this.props.text}
      </li>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    toggleTodo: (id) => {
      id = parseInt(id, 10)
      dispatch(toggleTodo(id));
    }
  }
}

export default connect(null, mapDispatchToProps)(Todo)