import Link  from 'next/link'
import Image from 'next/image'

function ProductCard({id,productImages,productName}) {
  return (
    <Link href={`/products/${id}`} className='group space-y-2 flex-shrink-0 '>
    <div className='mx-auto bg-primary/50 flex items-center justify-center p-2 relative h-full  w-[150px] md:w-[200px] md:h-[300px] lg:w-[250px] xl:w-[200px] 2xl:w-[240px] ' >
      <div className='bg-black/10 absolute group-hover:w-full group-hover:h-full transition-all ease-out duration-300 w-0 h-0'></div>
                <Image src={`${process.env.NEXT_PUBLIC_SERVER_ADDRESS+productImages[0]}`} alt="chair image" className='group-hover:scale-110 transition-all ease-out duration-500 max-md:w-[100px]   md:w-[150px] h-[150px] lg:h-[200px]  object-contain' width={150} height={150} /> 
    </div>
    <h2 className='text-center group-hover:text-secondary font-bold text-text-primary
    xl:text-xl '>{productName}</h2>
    </Link>
  )
}

export default ProductCard
