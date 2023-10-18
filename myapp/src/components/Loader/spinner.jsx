import React from 'react'

function Spinner() {
  return (
    <> 
     <div className="w-100 flex justify-center align-middle ">
     <div className="border-t-transparent border-solid animate-spin  rounded-full border-custom-black border-4 h-10 w-10  my-4"></div>
     </div>
    </>
  
  )
}

export default Spinner