import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showAll, showCompleted, showNotCompleted } from '../actions';

class Filters extends Component {
  showAllTodoList = (event) => {
    event.preventDefault();
    this.props.showAllTodoList();
  }

  showCompletedTodoList = (event) => {
    event.preventDefault();
     this.props.showCompletedTodoList();
  }

  showNotCompletedTodoList = (event) => {
    event.preventDefault();
    this.props.showNotCompletedTodoList();
  }

  render() {
    return (
      <div>
        <div><a onClick={(event) => this.showAllTodoList(event)} href = ''> All</a></div>
        <div><a onClick={(event) => this.showCompletedTodoList(event)} href = ''> Completed</a></div>
        <div><a onClick={(event) => this.showNotCompletedTodoList(event)} href = ''> NotCompleted</a></div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    showAllTodoList: ()=>{
      dispatch(showAll);
    },
    showCompletedTodoList: ()=>{
      dispatch(showCompleted);
    },
    showNotCompletedTodoList: ()=>{
      dispatch(showNotCompleted);
    }
  }
}

export default connect(null, mapDispatchToProps)(Filters);
