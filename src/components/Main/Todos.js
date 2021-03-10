// import { useState } from "react";
// import { todos } from "../../assets/Todos.json";


// const createTodoList = todos => todos.map(({ id, content, completed}) => (
//   <li id={id} className="todo-item">
//     <input type="checkbox" id={`ck-${id}`} className="checkbox"/>
//     <label htmlFor={`ck-${id}`}>{content}</label>
//   </li>
// ))

// const Todos = () => {
//   const [todoList, setTodos] = useState(todos);
//   const todo = createTodoList(todoList);

//   return (
//     <ul className="todos">
//       {todoList.map(todo => <Todo id cont/>)}
//     </ul>
//   )
// }

// export default Todos;