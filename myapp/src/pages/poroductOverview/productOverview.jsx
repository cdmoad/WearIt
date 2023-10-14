import React,{useContext} from 'react'
import Cart from '../../components/cart/cart'
import {useGetProduct} from '../../queries/productsQuery'
 import { useParams } from 'react-router-dom'
 import Reviews from "../../components/reviews/index"
import { useGetReviews } from '../../queries/reviewsQuery'
import { CartContext } from '../../contexts/cartContext'
import {saveToSessionStorage} from '../../utils/sessionStorage'

function ProductOverview() {

  const {id}=useParams()

  const { cart,setCart } = useContext(CartContext);


  const {data:product, isFetching, isError,isSuccess } = useGetProduct(id)

  
  const {data:reviews, isFetching:isFetchingReviews, isError:isErrorReviews,isSuccess:isSuccessReviews } = useGetReviews(id)

  
  const addToCart = () => {
    product.id=id;
    product.quantity=1;
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };


  function generateColorClassName(color) {
 
    const colorClassMap = {
      red: 'bg-red-500',
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      yellow: 'bg-yellow-500',
      purple: 'bg-purple-500',
      indigo: 'bg-indigo-500',
      white: 'bg-white',
      black: 'bg-black',
      oragne: 'bg-orange-500',
      brown: 'bg-rose-950',
      gray: 'bg-gray-500',
      pink: 'bg-pink-500',

    };
  
    const colorClass = colorClassMap[color] || 'bg-gray-400';  
  
    return `h-8 w-8 rounded-full border border-black border-opacity-10  ${colorClass}`;
  }
  
  return (
    <>
 {isFetching ?
null
    :
<>
    <div className="bg-white">
    <div className="pt-6">
      <nav aria-label="Breadcrumb">
        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <li>
            <div className="flex items-center">
              <a href="#" className="mr-2 text-sm font-medium text-gray-900">Men</a>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <a href="#" className="mr-2 text-sm font-medium text-gray-900">Clothing</a>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
  
          <li className="text-sm">
            <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">{product?.category_name}</a>
          </li>
        </ol>
      </nav>

      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          <img src={product.image} alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full object-cover object-center" />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img src={product.image} alt="Model wearing plain black basic tee." className="h-full w-full object-cover object-center" />
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img src={product.image} alt="Model wearing plain gray basic tee." className="h-full w-full object-cover object-center" />
          </div>
        </div>
        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
          <img src={product.image} alt="Model wearing plain white basic tee." className="h-full w-full object-cover object-center" />
        </div>
      </div>
  

      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {product?.title}
            </h1>
        </div>
  
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product inhtmlFormation</h2>
          <p className="text-3xl tracking-tight text-gray-900">
            {product?.price}DH
            </p>
  
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                
                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
                <svg className="text-gray-200 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="sr-only">4 out of 5 stars</p>
              <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
            </div>
          </div>
  
          <form className="mt-10">
 
            <div>
              
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
  
              <fieldset className="mt-4">
                <legend className="sr-only">Choose a color</legend>
                <div className="flex items-center space-x-3">
               {product?.colors?.map((color,index) => (
                <label key={index} className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                    <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                    <span id="color-choice-0-label" className="sr-only">White</span>
                    <span aria-hidden="true"  className={generateColorClassName(color)}></span>
                  </label>
              ))}
                  
                </div>
              </fieldset>
            </div>


         
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
              </div>
  
              <fieldset className="mt-4">
                <legend className="sr-only">Choose a size</legend>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
       
                  <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-not-allowed bg-gray-50 text-gray-200">
                    <input type="radio" name="size-choice" value="XXS" disabled className="sr-only" aria-labelledby="size-choice-0-label" />
                    <span id="size-choice-0-label">XXS</span>
                    <span aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                      <svg className="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                        <line x1="0" y1="100" x2="100" y2="0" vectorEffect="non-scaling-stroke" />
                      </svg>
                    </span>
                  </label>

{product?.size.map((size,index) => (

    <label key={index} className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                    <input type="radio" name="size-choice" value="S" className="sr-only" aria-labelledby="size-choice-2-label" />
                    <span id="size-choice-2-label">{size}</span>
                    
                    <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label>

))}
                
                 
 
              
                  {/* <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                    <input type="radio" name="size-choice" value="XS" className="sr-only" aria-labelledby="size-choice-1-label" />
                    <span id="size-choice-1-label">XS</span>
                     
                    <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label>
             
                  <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                    <input type="radio" name="size-choice" value="S" className="sr-only" aria-labelledby="size-choice-2-label" />
                    <span id="size-choice-2-label">S</span>
                    
                    <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label>
       
                  <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                    <input type="radio" name="size-choice" value="M" className="sr-only" aria-labelledby="size-choice-3-label" />
                    <span id="size-choice-3-label">M</span>
                  
                    <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label>
              
                  <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                    <input type="radio" name="size-choice" value="L" className="sr-only" aria-labelledby="size-choice-4-label" />
                    <span id="size-choice-4-label">L</span>
                    
                    <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label>
             
                  <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                    <input type="radio" name="size-choice" value="XL" className="sr-only" aria-labelledby="size-choice-5-label" />
                    <span id="size-choice-5-label">XL</span>
                    
                    <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label>
               
                  <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                    <input type="radio" name="size-choice" value="2XL" className="sr-only" aria-labelledby="size-choice-6-label" />
                    <span id="size-choice-6-label">2XL</span>
                   
                    <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label>
         
                  <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                    <input type="radio" name="size-choice" value="3XL" className="sr-only" aria-labelledby="size-choice-7-label" />
                    <span id="size-choice-7-label">3XL</span>
           
                    <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label> */}
                </div>
              </fieldset>
            </div>

            <h3 className="text-sm font-medium text-gray-900 mt-10">Stock : {product?.stock}</h3>
  
            <div   onClick={addToCart} className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-custom-black px-8 py-3 text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 cursor-pointer">Add to bag</div>
          </form>
        </div>
  
        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
   
          <div>
            <h3 className="sr-only">Description</h3>
  
            <div className="space-y-6">
              <p className="text-base text-gray-900"> {product?.description}</p>
            </div>
          </div>
  
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
  
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                <li className="text-gray-400"><span className="text-gray-600">Hand cut and sewn locally</span></li>
                <li className="text-gray-400"><span className="text-gray-600">Dyed with our proprietary colors</span></li>
                <li className="text-gray-400"><span className="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>
                <li className="text-gray-400"><span className="text-gray-600">Ultra-soft 100% cotton</span></li>
              </ul>
            </div>
          </div>
  
          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Details</h2>
  
            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up htmlFor our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Cart/> 

{
isFetchingReviews ? null :
reviews?.map((review)=>{
return(
  <Reviews review={review.review} star={review.star} userName={review.user_name}  />
  )
})

}

  


   </>
  }


  </>
  
  )
}

export default ProductOverview