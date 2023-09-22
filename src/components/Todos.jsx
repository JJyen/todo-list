import { TodoListItem } from "./TodoListItem"

export const Todos = ({ todos, deleteTodo }) => {
    return (
        <>
            {todos.map(todo => (
                todo.text &&
                    <TodoListItem todo={todo} key={todo.id} deleteTodo={deleteTodo}  />
                ))}
        </>
    )
}