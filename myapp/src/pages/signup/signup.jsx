import React from 'react'
import Chair from '../../assets/backgrounds/white-wooden-chair-with-autumn-c.jpg'
import  logo from '../../../public/waerit-logo-transparent.png'
import { Link } from 'react-router-dom'

function Signup() {
  return (
  
  <section class="bg-white">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <section
        class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
      >
        <img
          alt="Night"
          src={Chair}
          class="absolute inset-0 h-full w-full object-cover  opacity-60"
        />
  
        <div class="hidden lg:relative lg:block lg:p-12">
          <a class="block text-white" href="/">
            <span class="sr-only">Home</span>
           <img src={logo} alt="" height="80" width="80" className='rounded-full' />
          </a>
  
          <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Welcome to WearIt 
          </h2>
  
          <p class="mt-4 leading-relaxed text-white/90">
             A palce where you kind find all types of clothes, 
             new fashion and more.
          </p>
        </div>
      </section>
  
      <main
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
        <div class="max-w-xl lg:max-w-3xl">
          <div class="relative -mt-16 block lg:hidden">
            <a
              class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
              href="/"
            >
              <span class="sr-only">Home</span>
              <img src={logo} alt="" height="80" width="80" className='rounded-full' />
            </a>
  
            <h1
              class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
            >
              Welcome to WearIt
            </h1>
  
            <p class="mt-4 leading-relaxed text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
  
          <form action="#" class="mt-8 grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="FirstName"
                class="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
  
              <input
                type="text"
                id="FirstName"
                name="first_name"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-2 px-3 outline-none"
              />
            </div>
  
            <div class="col-span-6 sm:col-span-3">
              <label
                for="LastName"
                class="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
  
              <input
                type="text"
                id="LastName"
                name="last_name"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-2 px-3 outline-none"
              />
            </div>
  
            <div class="col-span-6">
              <label for="Email" class="block text-sm font-medium text-gray-700">
                Email
              </label>
  
              <input
                type="email"
                id="Email"
                name="email"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-2 px-3 outline-none"
              />
            </div>
  
            <div class="col-span-6 sm:col-span-3">
              <label
                for="Password"
                class="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
  
              <input
                type="password"
                id="Password"
                name="password"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-2 px-3 outline-none"
              />
            </div>
  
            <div class="col-span-6 sm:col-span-3">
              <label
                for="PasswordConfirmation"
                class="block text-sm font-medium text-gray-700"
              >
                Password Confirmation
              </label>
  
              <input
                type="password"
                id="PasswordConfirmation"
                name="password_confirmation"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-2 px-3 outline-none"
              />
            </div>
  
            <div class="col-span-6">
              <label for="MarketingAccept" class="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm py-2 px-3 outline-none"
                />
  
                <span class="text-sm text-gray-700">
                  I want to receive emails about events, product updates and
                  company announcements.
                </span>
              </label>
            </div>
  
            <div class="col-span-6">
              <p class="text-sm text-gray-500">
                By creating an account, you agree to our
                <a href="#" class="text-gray-700 underline">
                  terms and conditions
                </a>
                and
                <a href="#" class="text-gray-700 underline">privacy policy</a>.
              </p>
            </div>
  
            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Link to="/">
              <button
                class="inline-block shrink-0 rounded-md border   bg-custom-black px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-custom-black focus:outline-none focus:ring "
              >
                Create an account
              </button>
              </Link>
  
              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Already have an account?
                <Link to="/login">
                                  <a   class="text-gray-700 underline">Log in</a>.
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