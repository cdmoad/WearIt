import React,{useEffect, useState} from 'react'
import { useGetProducts } from '../../../../queries/productsQuery'
import { liveSearch } from '../../../../utils/liveSearch'

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
                <option class="whitespace-no-wrap text-sm">Client</option>
                <option class="whitespace-no-wrap text-sm">Seller</option>
                <option class="whitespace-no-wrap text-sm">Admin</option>
              </select>
            </div>
    
            <button type="button" class="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
              <svg class="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" class=""></path>
              </svg>
              Export to CSV
            </button>
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
    
              <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Color</td>
    
              <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Price</td>
            </tr>
          </thead>
    
          <tbody class="lg:border-gray-300">
            {isSuccess ? (search ? prods : products)?.map((product)=>(
              <tr class="">
              
              <td width="50%" class="whitespace-no-wrap py-3 text-sm font-bold text-gray-900 sm:px-6 flex">
              <img src={product.image} height={60} width={60}/>
               <p className='ml-6 pt-2'>{product.title}  </p>   
              </td>
    
              <td class="whitespace-no-wrap px-6   py-3 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                {product.stock}
                </td>
    
              <td class="whitespace-no-wrap hidden py-3 px-6  text-sm text-gray-600 lg:table-cell">
                 {product.color}
              </td>
    
              <td class="whitespace-no-wrap   py-3 text-sm font-normal text-gray-500 sm:px-6  ">
                {product.price}DH
                {/* <div class={`inline-flex items-center rounded-full ${user.status.toLowerCase() == 'client' ? 'bg-blue-600' : 'bg-custom-red'}    py-2 px-3 text-xs text-white`}>{user.status}</div> */}
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