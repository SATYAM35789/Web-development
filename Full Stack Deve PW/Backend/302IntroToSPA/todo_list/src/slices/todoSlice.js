import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (todo, action) => {  // state ek array hai
            let todoText = action.payload.todoText
            todo.todoList.push({ id: todo.todoList.length + 1, todoData: todoText, finished: false })
        },
        editTodo: (state, action) => {
            let todo = action.payload.todo
            let todoText = action.payload.todoText
            state.todoList = state.todoList.map(t => {
                if (t.id == todo.id) {
                    t.todoData = todoText
                }
                return t
            })
        },
        todoFinished: (state, action) => {
            let todo = action.payload.todo
            let isFinished = action.payload.isFinished
            state.todoList = state.todoList.map(t => {
                if (t.id = todo.id) {
                    todo.finished = isFinished
                }
                return t
            })
        },
        deleteTodo: (state, action) => {
            let todo = action.payload.todo
            state.todoList = state.todoList.filter(t => t.id != todo.id)
        }

    }
})

export const {deleteTodo, addTodo, editTodo, todoFinished} = todoSlice.actions
export default todoSlice.reducer

//  ererjs help in directly updating the state, state.todo.push kar rahe hai toh hamko lagta hai ki mutate kar raha lakin aisa nahi
//  nahi karta hai ye intermediate state banata hai pahle sare changes waha karta hai, phir us tate se ek naya state copy create karne ki kosis karta hai. 
