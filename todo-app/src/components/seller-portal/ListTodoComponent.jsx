import React, { Component } from 'react';

class ListTodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [{ id: 1, description: 'Learn React', done: false, targetDate: new Date() },
            { id: 2, description: 'Play hard', done: false, targetDate: new Date() },
            { id: 3, description: 'Go home', done: false, targetDate: new Date() }]
        }
    }

    render() {
        return (<div>
            <h1>List TODOs</h1>
            <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th> Description</th>
                        <th> Done</th>
                        <th> Target Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.todos.map(todo =>
                        <tr key={todo.id}>
                            <td> {todo.description} </td>
                            <td> {todo.done.toString()}</td>
                            <td> {todo.targetDate.toString()}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
        </div>
        )
    }
}


export default ListTodoComponent;