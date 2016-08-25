import React from 'react';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    return (
      <div>
        {this.props.todos}
      </div>
    );
  }
}
