 

// Function to save data to session storage
export function saveToSessionStorage(key, data) {
    try {
      const serializedData = JSON.stringify(data);
      sessionStorage.setItem(key, serializedData);
    } catch (error) {
      console.error('Error saving data to session storage:', error);
    }
  }
  
  // Function to retrieve data from session storage
  export function getFromSessionStorage(key) {
    try {
      const serializedData = sessionStorage.getItem(key);
      if (serializedData === null) {
        return null;
      }
      return JSON.parse(serializedData);
    } catch (error) {
      console.error('Error retrieving data from session storage:', error);
      return null;
    }
  }
  

  // Function to clear session storage
export function clearSessionStorage() {
  try {
    sessionStorage.clear();
  } catch (error) {
    console.error('Error clearing session storage:', error);
  }
}


export function isAuthenticated() {
  try {
    // Check if the authentication-related data exists in session storage
    const token = sessionStorage.getItem('token');
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
 

    // 🚨🚨🚨  ensure that token is not expired, etc.


    return !!token && !!name && !!email; // Return true if all data is present
  } catch (error) {
    console.error('Error checking authentication status:', error);
    return false; // Return false in case of an error
  }
}
 




  
  
  
  