import axios from "axios"

async function login(email,password){
    try {
      const response = await axios.post("http://localhost:7000/api/users/login",{email,password})
      if(!response.ok){
        console.log("Can't Login Internal Server Login")
      }
      const data = response.data
      console.log(data)
      return data
    } catch (error) {
      console.log("Failed To Login",error)
    }
  }
export default login