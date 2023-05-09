import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import "./styles.css"
import { useEffect, useState } from "react"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if(localValue == null) return [];

    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  },[todos])

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos, { id: crypto.randomUUID(), title, completed: false },]
    })
  }

  const toggleTodo = (id, completed) => {
    setTodos(currentTodos => {
      return currentTodos.map(item => {
        if (item.id === id) {
          return {...item, completed}
        }
        return item;
      })
    })
  }

  const deleteTodos = (id) =>{
    setTodos(currentTodos => {
      return currentTodos.filter(item => item.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodos={deleteTodos}/>
    </>
  )
}