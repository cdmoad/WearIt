import axios from "axios"

export async function fetchUsers() {
    try {
      const response = await axios.get('/users');
      const data = await response.json();
      return data;

    } catch (error) {
      throw new Error('Error fetching users');
    }
  }
 