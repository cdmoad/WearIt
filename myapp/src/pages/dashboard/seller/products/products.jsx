import React,{useEffect, useState} from 'react'
import { useGetProducts } from '../../../../queries/productsQuery'
import { liveSearch } from '../../../../utils/liveSearch'
import add from "../../../../assets/icons/add.svg"
import { Link } from 'react-router-dom'



function Products() {


    let {data:products,isFetching,isSuccess,isError} =useGetProducts()
  
    const [search,setSearch] =useState("")
    const [prods,setProds]=useState([])

    useEffect(() => {
      const filteredProds = liveSearch(search,"title", products);
      setProds(filteredProds)
    }, [search]);

  return (
    <div> 
 
    <div class="mx-auto mt-4 max-w-screen-2xl px-2">
      <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row sticky top-14 p-2 rounded-t-md border  shadow bg-white">
    
      <div class="flex justify-center items-center z-[-1] mr-2">
        <form   class="max-w-[280px]  ">
            <div class="relative">
                <input type="text" onChange={(e)=>setSearch(e.target.value)} value={search}   class="w-full border h-10 shadow-sm px-4 pr-10 rounded-2xl outline-none" placeholder="search" />
                <button type="submit">
                    <svg class="text-custom-red h-4 w-5   absolute top-3 right-3 fill-current"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                        x="0px" y="0px" viewBox="0 0 56.966 56.966"
                       >
                        <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z">
                        </path>
                    </svg>
            </button>
            </div>
        </form>
      </div>
    
        
    
        <div class="mt-4 sm:mt-0">
          <div class="flex items-center justify-start sm:justify-end">
            <div class="flex items-center">
              <label for="" class="mr-3 flex-shrink-0 text-sm font-medium text-gray-900"> Sort by: </label>
              <select name="" class="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1  py-2  pr-10 text-base outline-none focus:shadow sm:text-sm">
                <option class="whitespace-no-wrap text-sm">Category1</option>
                <option class="whitespace-no-wrap text-sm">Category2</option>
                <option class="whitespace-no-wrap text-sm">Category3</option>
              </select>
            </div>
    
           <Link to="/dashboard/addproduct">
           <button type="button" class="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
             <img src={add} alt="" width={18} height={18} className='mr-1 pt-0.5' />
              Add Product
            </button>
           </Link>
            
          </div>
        </div>
      </div>
    
      <div class="mt-1 overflow-hidden rounded-b-xl border shadow">
        <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
          <thead class="hidden border-b lg:table-header-group">
            <tr class="">

             {/* <td   class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Image</td> */}

              <td   class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Title</td>
    
              <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Stock</td>
    
              {/* <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Color</td> */}
    
              <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Price</td>
              <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6"> </td>
            </tr>
          </thead>
    
          <tbody class="lg:border-gray-300">
            {isSuccess ? (search ? prods : products)?.map((product)=>(
              <tr class="">
              
              <td width="100%" class="whitespace-no-wrap py-3 text-sm font-bold text-gray-900 sm:px-6 flex">
              <img src={product.image} className='h-7 w-7 md:h-14 md:w-14' height={60} width={60}/>
               <p className='ml-2 pt-1 md:ml-6 md:pt-2 w-10 overflow-hidden whitespace-nowrap md:w-40'>{product.title}  </p>   
              </td>
    
              <td class="whitespace-no-wrap px-6   py-3 text-sm font-normal text-gray-500 sm:px-6  ">
                {product.stock}
                </td>
    
              {/* <td class="whitespace-no-wrap hidden py-3 px-6  text-sm text-gray-600 lg:table-cell">
                 {product.color}
              </td> */}
    
              <td class="whitespace-no-wrap hidden  py-3 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell ">
                {product.price}DH
                {/* <div class={`inline-flex items-center rounded-full ${user.status.toLowerCase() == 'client' ? 'bg-blue-600' : 'bg-custom-red'}    py-2 px-3 text-xs text-white`}>{user.status}</div> */}
              </td>

             {/* edit/view/delete buttons  */}
              <td className='text-right'>
              <div class="inline-flex items-center rounded-md shadow-sm">
    <button
        class="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
        </span>
        <span class="hidden lg:inline-block">Edit</span>
    </button>
    <button
        class="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border-y border-slate-200 font-medium px-4 py-2 inline-flex space-x-1 items-center">
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </span>
        <span class="hidden lg:inline-block">View</span>
    </button>
    <button
        class="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </span>
        <span class="hidden lg:inline-block">Delete</span>
    </button>
</div>
              </td>
    
            </tr>
            )) : null}
          
    
           
          </tbody>
        </table>
      </div>
    </div>


      
    
    
         </div>
  )
}

export default Products