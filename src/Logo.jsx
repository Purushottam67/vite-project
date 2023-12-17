import React, { useEffect } from 'react'
import Header from './Header'


function Logo() {


 
  return (
    <div>
     <Header></Header>
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
      </div>

      <div className="absolute flex items-center justify-center h-screen mx-auto left-0 right-0">
        <form className="w-3/12 p-12 bg-black bg-opacity-70">
          <h1 className="font-bold text-3xl p-2 text-blue-100">
           g
          </h1>
          <input type="text" className="p-2 m-3 w-full" />
          <input type="text" className="p-2 m-3 w-full" />
          <button
            className="bg-red-600 px-11 p-2 m-3 w-full"
           
          >
           dsvf
          </button>
          <p className="text-white p-10 cursor-pointer" >
            sdf
          </p>
        </form>
      </div>
    </div>
  )
}

export default Logo;