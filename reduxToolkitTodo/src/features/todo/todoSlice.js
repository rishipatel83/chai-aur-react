import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
   todos: [{id: 1, text: "Hello world"}]
}


export const todoSlice = createSlice({
   name: 'todo',
   initialState,
   reducers: {
      addTodo: (state,action) => {
         const todo = {
            id: nanoid(),
            text: action.payload
         }
         state.todos.push(todo)
      }, //* we get here two things state and action we always get them
      //* state here it gives us the state of initialstate which is going to be change will definitely change
      //* action here gives us the values like we want the id to remove that we get through the action
      removeTodo: (state,action) => {
         state.todos = state.todos.filter((todo) => todo.id !== action.payload)
      },   //* I need to make update, delete for the same

      updateTodo: (state,action) => {
         const {id,text} = action.payload;
         const toUpdateTodo = state.todos.find((todo) => todo.id === id)
         if(toUpdateTodo)
            toUpdateTodo.text = text;
      }
      
   }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer