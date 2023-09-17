import React from 'react'
import SideMenu from './layout/sideMenu'

function Dashboard({children}) {
  return (
     <div>
        <SideMenu/>
         <h1 className='ml-[17rem] bg-red-600 w-fit text-white px-2'>Under Construction</h1>
     </div>
  )
}

export default Dashboard