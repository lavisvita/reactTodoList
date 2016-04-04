import dispatcher from '../dispatcher';

export function createTodo(text){
    dispatcher.dispatch({
        type: 'CREATE_TODO',
        text
    })
}

export function deleteTodo(id){
    dispatcher.dispatch({
        type: 'DELETE_TODO',
        id
    })
}

export function reloadTodos(){
    dispatcher.dispatch({
        type: 'FETCH_TODOS'
    });
    setTimeout(()=>{
        dispatcher.dispatch({type: 'RECEIVE_TODOS', todos:[
            {
                id: 1122234234,
                text: 'All done!',
                complete: false
            },
        ]});
        if(false){
            dispatcher.dispatch({type: 'FETCH_TODOS_ERROR'})
        }
    }, 1000);
}