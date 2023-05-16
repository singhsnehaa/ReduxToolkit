const getAllTodos = async () => {
  const data = await fetch('https://dummyjson.com/todos?limit=4');
  const response = await data.json();
  return response;
};

const deleteTodo = async todoId => {
  const data = await fetch(`https://dummyjson.com/todos/${todoId}`, {
    method: 'DELETE',
  });
  const response = await data.json();
  return response;
};

const addTodo = async (body) => {
  const data = await fetch('https://dummyjson.com/todos/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  const response = await data.json();
  return response;
};

const updateTodo = async (todoId,body) => {
  const data = await fetch(`https://dummyjson.com/todos/${todoId}`, {
    method: 'PUT', /* or PATCH */
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  const response = await data.json();
  return response;
};

const todoService = {getAllTodos, deleteTodo,addTodo,updateTodo};
export default todoService;
