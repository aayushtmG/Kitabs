import { useContext, useEffect, useState } from "react"

function Notifier({message,visible}) {
  return <div className={`z-50 fixed top-10 left-0 right-0  translate-x-[50%] ${ visible ? 'opacity-100': 'opacity-0'} transition-opacity`}>
    <p className='bg-green-600/90 text-white inline p-4 shadow-md rounded-md px-10 '>{message}</p>
  </div>
}

export default Notifier