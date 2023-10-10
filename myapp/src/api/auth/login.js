import axios from "axios"

export async function login(email,password) {

    try {
      const data = await axios.post('/login',{email,password});
     
   return data.data;
  
    } catch (error) {
        return { error: error.response.data.message };
    }
  }
 