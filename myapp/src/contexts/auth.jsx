import React, { createContext, useContext, useState } from 'react';
import {register} from "../api/auth/register"
import { login } from '../api/auth/login';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const navigate=useNavigate();

  const [user, setUser] = useState(null);
    const [error,setError]=useState(null);

  const Login = async (email, password) => {
    login(email,password).then((res)=>{

        if (res.error) {
          setError(res.error);
        } else {

        saveToSessionStorage("token",res.access_token)
        saveToSessionStorage("name",res.user.name)
        saveToSessionStorage("email",res.user.email)
        saveToSessionStorage("id",res.user.id)

        setUser({ token: res.access_token, name: res.user.name, email: res.user.email, id: res.user.id});  
        navigate('/')
    
        }
      }
        ).catch((err)=>{
          console.log(err)
        })
  
  };

  const Register = async (name, email,password,password_confirmation,role) => {
    register(data.name,data.email,data.password,data.password_confirmation,role)
    .then((res)=>{
     if (res.error) {
       setError(res.error);
     } else {
     saveToSessionStorage("token",res.access_token)
     saveToSessionStorage("name",res.user.name)
     saveToSessionStorage("email",res.user.email)
     saveToSessionStorage("id",res.user.id)

     setUser({ token: res.access_token, name: res.user.name, email: res.user.email, id: res.user.id});  

 
     navigate('/')
 
     }
   }
     ).catch((err)=>{
       console.log(err)
     })
  };

  const logout = () => {
    // Log the user out and remove user data
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login,register, logout,error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}