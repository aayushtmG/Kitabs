import Button from "./ui/Button"
import { useDispatch,useSelector } from 'react-redux';
import { addItem } from 'store/slices/cartSlice';

function ProductInfo({ productData}) {
  console.log(productData)
  const dispatch = useDispatch();

  const onAddCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 })); 
  };
  return (
    <div className=" font-primary max-w-[400px]">
      <h1 className="leading-relaxed font-extrabold text-5xl text-text-primary py-2 sm:py-4">
        {productData.title}
      </h1>
      <p className="font-medium text-base text-text-primary/70">
      {'description will be added later'} 
      </p>
      <div className="text-xl flex flex-col lg:text-3xl text-palette-primary font-bold py-4 px-1">
       <span>Rs. {productData.price}</span>  
       {
        productData.stock ?
       <span className="text-sm bg-green-500 rounded-md w-max py-1 px-4 text-white">In Stock</span>:
       <span className="text-sm bg-red-500 rounded-md w-max py-1 px-4 text-white">Out Of Stock</span>
       }
      </div>
              <Button
                className="w-full px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition duration-300"
                onClick={() => onAddCart(productData)}
              >Add To Cart</Button>
    </div>
  )
}

export default ProductInfo
