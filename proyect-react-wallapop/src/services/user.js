import axios from 'axios';

const url = 'http://localhost:3000/users';

export const getAllUsers = async (id) => {
  id = id || '';
  return await axios.get(`${url}/${id}`);
};
