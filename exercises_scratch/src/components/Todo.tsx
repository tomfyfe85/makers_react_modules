// import React, { useState } from 'react'

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);

//   const URL = `http://todoServer.com/tagged/wash-up`;
//   fetch(URL)
//     .then((res) => res.json())
//     .then((data) => setTodos(data));

//   return (
//     <>
//       <h2>Todos List:</h2>
//       <div className="todo-list">
//         {todos.map((todoData) => (
//           <Todo data={todoData} />
//         ))}
//       </div>
//     </>
//   );
// }