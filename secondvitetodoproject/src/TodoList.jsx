import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodos}) {


    return (
        <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((item) => {
          return (
            <TodoItem key={item.id} {...item} toggleTodo={toggleTodo} deleteTodos={deleteTodos}/>
          )
        })}
      </ul>
    )
}