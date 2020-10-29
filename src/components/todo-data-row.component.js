import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class TodoDataRow extends Component{
    
    constructor(props) {
        super(props);
    }

    deleteTodo = (id) => {
        axios.delete('http://localhost:4000/todos/' + id)
        .then((res) => {
            console.log('todo deleted succesfully')
        }).catch((error) => {
            console.log(error)
        })
        console.log('http://localhost:4000/todos/' + id);
    }

    render(){
        return(
            <tr>
                <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_description}</td>
                <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_responsible}</td>
                <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_priority}</td>
                <td>
                    <Link to={"/edit/"+this.props.todo._id} className="btn btn-primary btn-sm mr-1">Edit</Link>
                    <button onClick={() => this.deleteTodo(this.props.todo._id)} className="btn btn-danger btn-sm ml-1">Delete</button>
                </td>
            </tr>
        )
    }
}