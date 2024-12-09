'use client'
import { useState } from "react"

function ProductForm({ title, productImage }) {
  const [isLoading,setIsLoading] = useState(false)
  const atcBtnStyle = isLoading ?
    `pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-palette-dark opacity-25 cursor-none`
    :
    `pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-palette-dark`

  function handleSizeChange(e) {
    // send back size change
  }
  return (
    <div className="w-full">
      <div className="flex justify-start space-x-2 w-full">
        <div className="flex flex-col items-start space-y-1 flex-grow">
          <label className="text-gray-500 text-base">Size</label>
          <select
            id="size-selector"
            name="size-selector"
            onChange={(event) => handleSizeChange(event.target.value)}
            value={'sm'}
            className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
          >
          </select>
        </div>
      </div>
    </div>
  )
}

export default ProductForm
