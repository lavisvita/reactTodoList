import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todos = [
            {
                id: 1122234234,
                text: 'Important task',
                complete: false
            },
            {
                id: 4433278968,
                text: 'Second task',
                complete: false
            }
        ]
    }
    getAll(){
        return this.todos;
    }
    createTodo(text){
        const id = Date.now();
        this.todos.push({
            id,
            text,
            complete: false
        });
        this.emit('change');
    }
    handleActions(action){
        switch(action.type){
            case 'CREATE_TODO': {
                this.createTodo(action.text);
                break;
            }
                case 'RECEIVE_TODOS': {
                    this.todos = action.todos;
                    this.emit('change');
                }
        }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;