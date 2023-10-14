import React, { useContext } from 'react';
import {CartContext} from '../../contexts/cartContext'
import {motion,AnimatePresence} from "framer-motion"
import { Link } from 'react-router-dom';


function Cart() {

    const { isCartVisible,cart,setCart,removeFromCart } = useContext(CartContext);
    const { toggleCart } = useContext(CartContext);

    const handleRemove = (id) => {
      removeFromCart(id);
    };
    

     
   
  return (

    <AnimatePresence>
        {
    isCartVisible ? (

<motion.div
  className="fixed top-16 right-0 w-screen  max-w-sm border shadow-lg   bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 overflow-y-auto"
  aria-modal="true"
  role="dialog"
  tabindex="-1"
  animate={{ x: 0 }}
  initial={{ x: 500 }}
  transition={{ duration: 0.5 }}
  exit={{ x: 500 }}
>
 
  <button onClick={toggleCart} className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
    <span   className="sr-only">Close cart</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>

  <div className="mt-4 space-y-6 ">
    <ul className="space-y-4 ">
      {(cart?.length === 0 || !cart )  ? <p className='text-xl font-bold text-custom-black text-center'>No Items in cart</p>  : null}
    {cart?.map((item, index) => (
           <li key={index} className="flex items-center gap-4">
        <img
          src={item?.image}
          alt=""
          className="h-16 w-16 rounded object-cover"
        />

        <div>
          <h3 className="text-sm text-gray-900">{item.title}</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">Size:</dt>
              <dd className="inline"> {item?.size?.map((size)=>(size+" "))}</dd>
            </div>

            <div>
              <dt className="inline">Color:</dt>
              <dd className="inline"> {item?.colors?.map((color)=>(color+" "))}</dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <htmlForm>
            <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

            <input
              type="number"
              min="1"
              defaultValue={1}
              onChange={(e) => {handleChangeQuantity(item?.id,e.target.value)}}
              id="Line1Qty"
              className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            />
          </htmlForm>

          <button onClick={()=>handleRemove(item?.id)} className="text-gray-600 transition hover:text-red-600">
            <span className="sr-only">Remove item</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </li>
          ))}
        
     
    </ul>

    <div className="space-y-4 text-center">

     <Link to='/cart'>
      <a
        className="block rounded border border-gray-600  px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
        onClick={toggleCart}
      >
        View my cart ({cart?.length})
      </a>
      </Link>

      <Link to="/checkout">
      <a 
        className="block rounded bg-custom-black my-2 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
        onClick={toggleCart}
      >
        Checkout
      </a>
      </Link>

      <a
        href="#"
        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
      >
        Continue shopping
      </a>
    </div>
  </div>
</motion.div>
    ) : null}
    </AnimatePresence>
  )
}

export default Cart