  import React,{useRef,useState} from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {validationSchema} from "../../validation/login"
import {login} from "../../api/auth/login"
import { saveToSessionStorage } from '../../utils/sessionStorage';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate=useNavigate()

  const [error,setError]=useState(null);

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
   login(data.email,data.password).then((res)=>{

    if (res.error) {
      setError(res.error);
    } else {
    saveToSessionStorage("token",res.access_token)
    saveToSessionStorage("name",res.user.name)
    saveToSessionStorage("email",res.user.email)
    saveToSessionStorage("id",res.user.id)
    

    navigate('/')

    }
  }
    ).catch((err)=>{
      console.log(err)
    })
  };

 
  return (
    <div class="flex min-h-screen w-screen   items-center justify-center text-gray-600 "  >
  <div class="relative">
    
<div className="hidden sm:block h-56 w-56 text-custom-black absolute a-z-10 -left-20 -top-20">
   <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTranshtmlForm='scale(0.6) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  strokeWidth='1' stroke='none' fill='currentColor'/></pattern></defs><rect width='800%' height='800%' transhtmlForm='translate(0,0)' fill='url(#a)'/></svg>
  </div>
<div className="hidden sm:block h-28 w-28 text-custom-black absolute a-z-10 -right-20 -bottom-20">
   <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='b' patternUnits='userSpaceOnUse' width='40' height='40' patternTranshtmlForm='scale(0.5) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  strokeWidth='1' stroke='none' fill='currentColor'/></pattern></defs><rect width='800%' height='800%' transhtmlForm='translate(0,0)' fill='url(#b)'/></svg>
  </div>
  
    <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
      <div className="flex-auto p-6">
     
        <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
          <a href="#" className="flex cursor-pointer items-center gap-2 text-custom-black no-underline  ">
            <span className="flex-shrink-0 text-3xl font-black lowercase tracking-tight opacity-100">WearIt.</span>
          </a>
        </div>
       
        <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">Welcome to WearIt!</h4>
        <p className="mb-6 text-gray-500">Please sign-in to access your account</p>

        <form id="" class="mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-4">
            <label for="email" class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Email</label>
            <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) =><input  {...field} type="text" class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"   placeholder="Enter your email" autofocus="" />
   }
        />
        {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <div className="flex justify-between">
              <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700" htmlFor="password">Password</label>
              <a href="auth-htmlForgot-password-basic.html" className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500">
                <small className=" ">Forgot Password?</small>
              </a>
            </div>
            <div class="relative flex w-full flex-wrap items-stretch">
            
            <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) =><input {...field} type="password"   class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"  placeholder="············" />

   }
        />
        
            </div>
            {errors.password ? <p className='text-red-500 text-sm'>{errors.password.message}</p>  : error &&   <p className='text-red-500 text-sm'> {error}</p> }
          </div> 
          
         

          <div className="mb-4">
            <div className="block">
              <input className="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-indigo-500 focus:border-indigo-500 focus:shadow" type="checkbox" id="remember-me"  style={{
        backgroundImage:
          "url('data:image/svg+xml,%3csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"%3e%3cpath fill=\"none\" stroke=\"%23fff\" strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M6 10l3 3l6-6\"/%3e%3c/svg%3e')",
      }} checked />
 
  
              <label className="inline-block" htmlFor="remember-me"> Remember Me </label>
            </div>
          </div>
          <div class="mb-4">
            <button class="grid w-full cursor-pointer select-none rounded-md border   bg-custom-black py-2 px-5 text-center align-middle text-sm text-white shadow   hover:bg-black hover:text-white   focus:text-white focus:shadow-none" 
            type="submit">Sign in</button>
          </div>
        </form>

        <p className="mb-4 text-center">
     
     <Link to="/signup">
                  <a  className="cursor-pointer text-custom-black-500 no-underline hover:text-custom-black"> Create an account </a>
     </Link>
        </p>
      </div>
    </div>
 
  </div>
</div>

  )
}

export default Login