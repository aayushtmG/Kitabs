import Link  from 'next/link'
import Image from 'next/image'

function ProductCard({id,productImages,productName}) {
  return (
    <Link href={`/products/${id}`} className='group flex flex-col items-center flex-shrink-0  gap-2'>
    <div className='mx-auto flex items-center  shadow-md justify-center p-2 relative h-full  w-[150px] md:w-[200px] md:h-[300px] lg:w-[250px] xl:w-[200px] 2xl:w-[240px] ' >
      <div className='bg-black/10 absolute group-hover:w-full group-hover:h-full transition-all ease-out duration-300 w-0 h-0 z-20'></div>
                <Image src={`https://kitabs.onrender.com${productImages[0]}`} alt={productName} className='group-hover:scale-105 transition-all ease-out duration-500  h-full w-[150px] md:w-[180px]  lg:w-[200px] xl:w-[200px] 2xl:w-[200px]  object-contain' width={200} height={300} /> 
    </div>
    <h2 className='text-center group-hover:text-secondary font-bold text-text-primary
    xl:text-xl '>{productName}</h2>
    </Link>
  )
}

export default ProductCard
