'use client'

import Image from "next/image"
import ProductCard from "../components/ProductCard"
import Link from "next/link"
import { useEffect, useState } from "react"
import MainLayout from '../layouts/MainLayout.jsx'


export default function Home() {
  const [products,setProducts] = useState([]) 

  const fetchProducts = async()=>{
    const response = await fetch('http://127.0.0.1:5000/api/products') 
    const body = await response.json()
    setProducts(body.products); 
  }

  useEffect(()=>{
    fetchProducts();
  },[])
  return (
    <MainLayout>
    <section className='h-[920px] bg-primary pt-20 flex justify-center items-center'>
      <div className='w-4/5 flex text-text-primary justify-between flex-col-reverse sm:flex-row '>
        <div className='basis-1/2 flex justify-center flex-col space-y-4'>
          <h1 className='text-5xl xl:text-8xl font-bold'>Ample Chair</h1>
          <p className="xl:text-1xl opacity-80">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          <Link href="/products">
          <button className='bg-secondary text-white p-4 px-6 w-fit btn-primary rounded-md '>
            View Our Products
          </button>
          </Link>
        </div>
        <div className='basis-2/5'>
          <Image src="/images/image.png" alt="chair image" className='max-sm:w-[300px] w-full mx-auto max-sm:mb-4' width={300} height={0}/>
        </div>
      </div>
    </section>
    {/* New Arrivals section*/}
    <section className='flex flex-col items-center justify-center space-y-4 mt-20 '>
          <h1 className='text-5xl font-bold  text-text-primary my-10 text-center'>New Arrivals</h1>
          <div className='px-10 grid place-items-center grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 w-full xl:w-3/4 '>
            {
              products.map(({_id,title,images})=>
                <ProductCard
                  key={_id}
                  id={_id}
                  productImages={images}
                  productName={title}
                />
              )
            }
          </div>
    </section>
{/* Banner section */}
<div className="relative bg-gray-900 text-white h-[500px] my-20 flex justify-center items-center">
  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat banner" ></div>
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  <div className="relative max-w-4xl mx-auto px-8 py-16 text-center md:text-left">
    <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold banner-text">Unlimited Chair Collection</h1>
    <p className="mt-4 text-sm md:text-base xl:text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <p className="mt-2 text-lg font-semibold">Starting From <span className="text-orange-400">$199</span></p>
        <button className='bg-secondary text-white p-4 px-6 w-fit btn-primary rounded-md my-4 hover:text-white' onClick={()=> alert('hello')}>
          View Our Products
        </button>
  </div>
</div>
    {/* Featured product section */}
    <section className='flex flex-col items-center justify-center space-y-4 mt-20 '>
          <h1 className='text-5xl font-bold  text-text-primary my-10 text-center'>Featured Products</h1>
          <div className='px-10 grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full xl:w-3/4 my-10 '>
            {
              products.map(({_id,images,title})=>
                <ProductCard
                  key={_id}
                  id={_id}
                  productImages={images}
                  productName={title}
                />
              )
            }
          </div>
    </section>
    </MainLayout>
  )
}
