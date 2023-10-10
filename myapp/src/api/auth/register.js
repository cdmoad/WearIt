import axios from "axios"

export async function register(name,email,password,password_confirmation) {
    try {
      const response = await axios.post('/register',{name,email,password,password_confirmation});
      const data = await response.json();
    //   return data;
    console.log(data)

    } catch (error) {
      throw new Error('Error in Register');
    }
  }
 