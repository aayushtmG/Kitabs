'use client'
import Link  from 'next/link'
import Image from 'next/image'
import Button from './ui/Button'
import { useDispatch,useSelector } from 'react-redux';
import { addItem } from 'store/slices/cartSlice';

function ProductCard({product}) {
  const  {items} = useSelector(state=> state.cart);
  const dispatch = useDispatch();

  const onAddCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 })); 
  };
  return (
    <div>
    <Link href={`/products/${product._id}`} className='group flex flex-col items-center flex-shrink-0  gap-2'>
      <div className='mx-auto flex  flex-col space-y-4  shadow-md justify-center p-2 relative h-full ' >
        <div className='bg-black/10 absolute group-hover:w-full group-hover:h-full self-center transition-all ease-out duration-300 w-0 h-0 z-20'></div>
                  <Image src={`https://kitabs.onrender.com${product.images[0]}`} alt={product.title} className='group-hover:scale-105 transition-all ease-out duration-500  h-full w-[150px] md:w-[180px]  lg:w-[200px] xl:w-[200px] 2xl:w-[200px]  object-contain' width={200} height={300} /> 
                  <div>
                        <h2 className=' group-hover:text-secondary font-bold text-text-primary
                        xl:text-xl '>{product.title}</h2>
                          <p className="2xl:text-xl font-semibold text-[#1a385e]">
                            Rs.{product.price}
                          </p>
                  </div>
      </div>
    </Link>
              <Button
                className="w-full px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition duration-300"
                onClick={() => onAddCart(product)}

              >Add To Cart</Button>
              </div>
  )
}

export default ProductCard
