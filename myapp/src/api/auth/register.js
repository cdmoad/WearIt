import axios from "axios"

export async function register(name,email,password,password_confirmation,role) {
 
    try {
      const data = await axios.post('/register',{name,email,password,password_confirmation,role_id:role});
    
    return data.data;

    } catch (error) {
      throw new Error('Error in Register');
    }
  }
 