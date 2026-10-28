import { bindActionCreators, combineReducers, createStore } from "redux";

const ADD_TODO = 'add_todo'
const DEL_TODO = 'delete_todo'
const EDIT_TODO = 'edit_todo'
const ADD_USER = 'add_user'

 function todoReducer(state = [], action){
    if( action.type == ADD_TODO){
        const todoText =  action.payload.todoText
        return[
            ...state,
            { text : todoText, isFinished : false , id: (state.length == 0)? 1 : state[state.length - 1].id + 1}  // last ka id nikal usme 1 add kar diya
        ]
    }
    else if(action.type == DEL_TODO){
        const todoId = action.payload.todoId 
        return state.filter( t=> t.id != todoId)  // wahi todo id layenge jo hamare given todo ke barabar nahi hai
    }
    else if(action.type == EDIT_TODO){
        const todo = action.payload.todo
        const todoText = action.payload.todoText
        //  todo.id : id jisko update karna hai t.id : ek ek karke jis id ke pass ja rahe hai
        return state.map( t=> {
            if(t.id == todo.id){
                t.text = todoText
            }
            return t
        })
    }
    else{
        return state
    }
 }

function userReducer(state = [] , action){
    if(action.type == ADD_USER){
        const userName = action.payload.userName
        return[
            ...state,
            { name : userName , id: (state.length == 0)? 1 : state[state.length - 1].id + 1} 
       ] 
    }
    else{
        return state
    }
}

//  const response = createStore(todoReducer, [])

const reducer = combineReducers( { todo: todoReducer , users:userReducer})

const {dispatch , subscribe , getState , replaceReducer } = createStore(reducer)

subscribe( ()=> console.log(getState()))


//  Add method dispatch
dispatch({type : ADD_TODO , payload : {todoText : 'todo1'}})

dispatch({type : ADD_TODO , payload : {todoText : 'todo2'}})


//  Delete method dispatch
dispatch({ type : DEL_TODO , payload : { todoId : 1}})



// Action objects -> action methods (action creators like addTodo, deleteTodo)
const addTodo = (todoText) => ({type : ADD_TODO , payload : {todoText}})
dispatch(addTodo('actionBind'))

const deleteTodo = (id) => ({type : DEL_TODO, payload: {todoId: id}})
dispatch(deleteTodo(2))

const addUser = (name) => ({ type: ADD_USER , payload: {userName : name }})
dispatch(addUser("Love"))

const actions = bindActionCreators({addTodo, deleteTodo , addUser}, dispatch)
//  no need to call dispatch
actions.addTodo('Hello Baby')
actions.deleteTodo(3)


actions.addUser('Satyam')
