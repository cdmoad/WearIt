import axios from "axios"

export async function logout() {

    try {
      const data = await axios.post('/logout');
     
   return data.data;
  
    } catch (error) {
        return { error: error.response.data.message };
    }
  }
 