import axios from 'axios';

const registerUser = async (formData) => {
  const { email, fullName, userName, password, avatar } = formData;
  try {
    const response = await axios.post('http://localhost:7000/api/users/register', {
      email,
      fullName,
      userName,
      password,
      avatar,
    });
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export default registerUser;
