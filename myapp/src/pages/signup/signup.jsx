import React,{useState} from 'react'
import Chair from '../../assets/backgrounds/white-wooden-chair-with-autumn-c.jpg'
import  logo from '../../../public/waerit-logo-transparent.png'
import { Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {validationSchema} from "../../validation/signup";
import {register} from "../../api/auth/register"
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { saveToSessionStorage } from '../../utils/sessionStorage';


function Signup() {

  const navigate=useNavigate()

  const [role, setRole] = useState(3);
  const [error,setError]=useState(null);

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    register(data.name,data.email,data.password,data.password_confirmation,role)
     .then((res)=>{
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
  
  <section className="bg-white">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
      <section
        className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
      >
        <img
          alt="Night"
          src={Chair}
          className="absolute inset-0 h-full w-full object-cover  opacity-60"
        />
  
        <div className="hidden lg:relative lg:block lg:p-12">
          <a className="block text-white" href="/">
            <span className="sr-only">Home</span>
           <img src={logo} alt="" height="80" width="80" className='rounded-full' />
          </a>
  
          <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Welcome to WearIt 
          </h2>
  
          <p className="mt-4 leading-relaxed text-white/90">
             A palce where you kind find all types of clothes, 
             new fashion and more.
          </p>
        </div>
      </section>
  
      <main
        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
        <div className="max-w-xl lg:max-w-3xl">
          <div className="relative -mt-16 block lg:hidden">
            <a
              className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
              href="/"
            >
              <span className="sr-only">Home</span>
              <img src={logo} alt="" height="80" width="80" className='rounded-full' />
            </a>
  
            <h1
              className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
            >
              Welcome to WearIt
            </h1>
  
            <p className="mt-4 leading-relaxed text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
  
          <form action="#" className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit(onSubmit)}>
 
  
            <div className="col-span-6">
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
            Name
              </label>
  
              <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) =><input  {...field} type="text"  className="mt-1 w-full rounded-md  border border-gray-200  text-sm text-gray-700   py-2 px-3 outline-none"   placeholder="Enter your name" autofocus="" />
 }
        />
        {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
            </div>
            <div className="col-span-6">
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
  
              <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) =><input  {...field} type="text"  className="mt-1 w-full rounded-md border border-gray-200  text-sm text-gray-700   py-2 px-3 outline-none"   placeholder="Enter your email" autofocus="" />
 }
        />
        {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
              
            </div>
  
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) =><input  {...field} type="text"  className="mt-1 w-full rounded-md border border-gray-200 text-sm text-gray-700   py-2 px-3 outline-none"   placeholder="Enter your password" autofocus="" />
 }
        />
        {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
             </div>
  
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="PasswordConfirmation"
                className="block text-sm font-medium text-gray-700"
              >
                Password Confirmation
              </label>
  
              <Controller
          name="password_confirmation"
          control={control}
          defaultValue=""
          render={({ field }) =><input  {...field} type="text"  className="mt-1 w-full rounded-md    border border-gray-200 text-sm text-gray-700   py-2 px-3 outline-none"   placeholder="Enter your password confirmation" autofocus="" />
 }
        />
        {errors.password_confirmation && <p className='text-red-500 text-sm'>{errors.password_confirmation.message}</p>}
            </div>

            <div className="col-span-6 sm:col-span-3">
            <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
        <Select
      defaultValue={3}
      style={{
        width: 120,
      }}
      onChange={(value)=>{setRole(value)}}
      options={[
        {
          value: 2,
          label: 'Seller',
        },
        {
          value: 3,
          label: 'Cient',
        },
      ]}
    />
  </div>
              
  
            <div className="col-span-6">
              <label htmlFor="MarketingAccept" className="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm py-2 px-3 outline-none"
                />
  
                <span className="text-sm text-gray-700">
                  I want to receive emails about events, product updates and
                  company announcements.
                </span>
              </label>
            </div>

      
  
            <div className="col-span-6">
              <p className="text-sm text-gray-500">
                By creating an account, you agree to our
                <a href="#" className="text-gray-700 underline">
                  terms and conditions
                </a>
                and
                <a href="#" className="text-gray-700 underline">privacy policy</a>.
              </p>
            </div>
  
            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
           
              <button
                className="inline-block shrink-0   border   bg-custom-black px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-custom-black focus:outline-none focus:ring "
                type="submit"
              >
                Create an account
              </button>
             
  
              <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                Already have an account?
                <Link to="/login">
                                  <a   className="text-gray-700 underline">Log in</a>.
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
  )
}

export default Signup