export async function fetchUsers() {
    try {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
      return data;

    } catch (error) {
      throw new Error('Error fetching users');
    }
  }
 