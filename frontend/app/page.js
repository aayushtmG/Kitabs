'use client'

import Image from "next/image"
import ProductCard from "../components/ProductCard"
import Link from "next/link"
import { useEffect, useState } from "react"
import MainLayout from '../layouts/MainLayout.jsx'
import {TailSpin} from 'react-loader-spinner'
import MotivationalBlock from '@/components/MotivationalBlock'


export default function Home() {
  const [products,setProducts] = useState([]) 
  const [featuredProducts,setFeaturedProducts] = useState([]) 
  const [isLoading,setIsLoading] = useState(true);
  const fetchProducts = async()=>{
    const response = await fetch(`https://kitabs.onrender.com/api/products/new-products`) 
    // const response = await fetch(`http://localhost:5000/api/products/new-products`) 
    const body = await response.json()
    setProducts(body.products); 
    setIsLoading(false)
  }
  const fetchFeaturedProducts= async()=>{
    // const response = await fetch(`http://localhost:5000/api/products/featured-products`) 
    const response = await fetch(`https://kitabs.onrender.com/api/products/featured-products`) 
    const body = await response.json()
    console.log(body)
    setFeaturedProducts(body.products); 
    setIsLoading(false)

  }

  useEffect(()=>{
    fetchProducts();
    fetchFeaturedProducts();
  },[])


  return (
    <MainLayout>
    <section className='h-[920px]  pt-20 flex justify-center items-center'>
      <div className='w-4/5 flex text-text-primary justify-between flex-col-reverse sm:flex-row '>
        <div className='basis-1/2 flex justify-center flex-col space-y-4'>
          <h1 className='text-5xl xl:text-8xl font-bold text-primary'>Kitabs</h1>
          <p className="xl:text-xl opacity-80">Discover a world of stories, knowledge, and inspiration at your fingertips. Whether you're searching for bestsellers, hidden gems, or timeless classics, we’ve got the perfect book for every reader. With curated collections, unbeatable prices, and a seamless shopping experience,Kitabs is where book lovers find their next great read. Start your journey with us today!
          </p>
          <Link href="/products">
          <button className='bg-secondary text-white p-4 px-6 w-fit btn-primary rounded-md border border-secondary'>
            View Our Products
          </button>
          </Link>
        </div>
        <div className='basis-2/5'>
          <Image src="/images/hero_image.png" alt="Book image" className='max-sm:w-[300px] w-full mx-auto max-sm:mb-4' width={300} height={0}/>
        </div>
      </div>
    </section>
    {/* New Arrivals section*/}
    <section className='flex flex-col items-center justify-center space-y-4 mt-20 '>
          <h1 className='text-5xl font-bold  text-text-primary my-10 text-center'>New Arrivals</h1>
            {
              isLoading ? <div className="flex justify-center w-full "> <TailSpin
  visible={true}
  height="80"
  width="80"
  color="#0074D9"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  /> </div>: 
          (<div className='px-10 grid place-items-center grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 w-full xl:w-3/4 '>
            {
              products.map((product)=>

                <ProductCard
                  key={product._id}
                  product={product}
                  // id={_id}
                  // productImages={images}
                  // productName={title}
                  // productPrice={price}
                />
              )
            }
          </div>)}
    </section>
<div className="relative bg-gray-900 text-white h-[500px] my-20 flex justify-center items-center">
  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat banner" ></div>
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  <div className="relative max-w-4xl mx-auto px-8 py-16 text-center md:text-left">
    <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold banner-text">Discover Your Next Great Read</h1>
    <p className="mt-4 text-sm md:text-base xl:text-lg">
      Explore our vast collection of books, from bestsellers to hidden gems. Whether you're into thrilling mysteries, heartwarming romances, or thought-provoking non-fiction, we have something for every reader. Dive into a world of stories and knowledge today!
    </p>
    <p className="mt-2 text-lg font-semibold">Starting From Only <span className="text-orange-400">Rs 200</span></p>
    <Link href='/products' >
    <button className='bg-secondary text-white p-4 px-6 w-fit btn-primary rounded-md my-4 hover:text-white' >
      Browse Our Collection
    </button>
    </Link>
  </div>
</div>
    {/* Featured product section */}
    <section className='flex flex-col items-center justify-center space-y-4 mt-20 '>
          <h1 className='text-5xl font-bold  text-text-primary my-10 text-center'>Featured Products</h1>

            {
              isLoading ? <div className="flex justify-center w-full "> <TailSpin
  visible={true}
  height="80"
  width="80"
  color="#0074D9"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  /> </div>: 
          <div className='px-10 grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full xl:w-3/4 my-10 '>
            {
              featuredProducts.map((product)=>
                <ProductCard
                  key={product._id}
                  product={product}
                />
              )
            }
          </div>
          }
    </section>
            <MotivationalBlock/>
</MainLayout>
  )
}
