'use client'
import { useState  } from 'react'
import Image from 'next/image'


function ProductImageDisplay({images,title}) {
  const [mainImage,setMainImage] = useState(images[0]);
  return (
    <div className=" w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded-md shadow-lg p-4 h-full max-h-[800px]">
      <div className="relative  grid place-items-center  w-full h-ful">
        <Image
src={`https://kitabs.onrender.com${mainImage}`}
          alt={title}
          width={500}
          height={0}
          className=" transform duration-500 ease-in-out hover:scale-105 w-[250px] lg:w-[350px] 2xl:w-[400px]"
        />
      </div>
      <div className="relative flex">
        {/* mini display */}
        {/* <div
          style={{ scrollBehavior: "smooth" }}
          className="flex space-x-3 w-1/2 my-4 overflow-auto mx-auto " 
        >
          {
            images.map((image, index) => (
              <button
                key={index}
                className={`relative  rounded-sm border flex-1 flex justify-center items-center p-2 ${images[0] == image ? 'border-secondary' : 'border-text-primary/50'}`}
                onClick={() => setMainImage(images[index])}
                onMouseOver={() => setMainImage(images[index])}
                
              >
                <Image
src={`https://kitabs.onrender.com${image}`}
                  alt={title}
                  width={100}
                  height={0}
                  className="w-full  transform duration-500 ease-in-out hover:scale-105 "
                />
              </button>
            ))
          }
        </div> */}
      </div>
    </div>
  )
}

export default ProductImageDisplay
