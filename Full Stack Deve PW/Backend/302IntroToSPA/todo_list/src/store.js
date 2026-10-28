//  Install redux dev tools in your chrome
import todoReducer from './slices/todoSlice'
import { configureStore } from '@reduxjs/toolkit'

const store =  configureStore({
    reducer : {
        todo : todoReducer
    }
})

export default store