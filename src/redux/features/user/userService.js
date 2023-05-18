const userList = async () => {
  const data = await fetch(
    `https://dummyjson.com/users?limit=3&select=firstName,lastName,id,email,gender,phone,address,gender,password,image`,
  );
  const response = await data.json();
  return response;
};

const deleteUser = async userId => {
  const data = await fetch(`https://dummyjson.com/users/${userId}`, {
    method: 'DELETE',
  });
  const response = await data.json();
  return response;
};

const singleUser = async userId => {
  const data = await fetch(`https://dummyjson.com/users/${userId}`);
  const response = await data.json();
  return response;
};

const updateUser = async (userId,body) => {
    console.log('response service=>', body);
  const data = await fetch(`https://dummyjson.com/users/${userId}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body),
  });
  const response = await data.json();
//   console.log('response service=>', response);
  return response;
};

const userService = {userList, deleteUser, singleUser, updateUser};
export default userService;
