import React from 'react'






const NavDemo = () => {
  return (
    <>
        <div className="nav-demo">
            <ul className='screen-selector'>
                <li className='active' data-width='1440' data-height='768'>Desktop</li>
                <li data-width='1024' data-height='768'>Laptop</li>
                <li data-width='768' data-height='768'>Tablet</li>
                <li  data-width='375' data-height='768' data>Mobile</li>
            </ul>
        </div>


    </>
    
  )
}

export default NavDemo