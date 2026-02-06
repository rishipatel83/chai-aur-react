import{createContext, useContext} from "react"

export const TodoContext = createContext({
   todos: [
      {
         id: 1,
         todo: " Todo msg",
         completed: false,
      }
   ],
   addTodo: (todo) => {},
   updatedTodo: (id, todo) => {},
   deleteTodo: (id) => {},
   toggleComplete: (id) => {}
})



export const useTodo = () => {
   return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;  //* here we have written this so that we don't have to write that TodoContext.Provider there nothing much just for short we are writing this just like creating a variable