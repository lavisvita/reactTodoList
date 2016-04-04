import React from 'react';
import Todo from '../components/Todo';
import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';
export default class Todos extends React.Component{
    constructor(){
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            todos: TodoStore.getAll(),
        };
    }

    createTodo(){
        var task = this.refs.myInput;
        if(task.value!='') TodoActions.createTodo(task.value);
    }
    reloadTodos(){
        TodoActions.reloadTodos();
    }
    componentWillMount(){

        console.log('count', TodoStore.listenerCount('change'));
    }
    conponentWillUnMount(){
        TodoStore.removeListener('change', this.getTodos);
    }
    getTodos(){
        this.setState({
           todos: TodoStore.getAll(),
        });
    }
    render(){
        const { todos } = this.state;
        const TodoComponents = todos.map((todo) => {
            return <li key={todo.id}><Todo text = {todo.text} /></li>;
        });

        return(
            <div>

                <h2>Add new Task</h2>
                <button onClick={this.createTodo.bind(this)}>Add task!</button>
                    <input ref='myInput'/>
                <button onClick={this.reloadTodos.bind(this)}>Perform all!</button>
                <h3>Many Tasks</h3>
                <ul>
                    {TodoComponents}
                </ul>
            </div>
        );
    }
}