'use client';
import ProductDetails from '@/components/ProductDetails';
import SuggestionBlock from '@/components/SuggestionBlock';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect,useState } from 'react';

function ProductDetailsClient({ productId }) {
  const [product,setProduct] = useState('');
  const [productFetched,setProductFetched] = useState(false);
  //todo
  const fetchProduct = async()=>{
    const response = await fetch(`https://kitabs.onrender.com/api/products/${productId}`)
    const body = await response.json();
      setProduct(body.product);
      setProductFetched(true);
  }
  //fetch product with id
  useEffect(()=>{
    fetchProduct();
  },[])
  //setCategory after fetching data
  return (
    <section>
      <div className=" py-10">
        <div className="pt-20 max-w-6xl mx-auto">
          <Link
            href={'./'}
            className="max-sm:mx-1 ml-2 my-4 text-base font-semibold text-white inline-flex items-center justify-center border border-text-primary transition-colors bg-text-primary rounded-md py-1 px-3 hover:bg-white hover:text-secondary hover:border-secondary"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2 font-semibold" />
            Back
          </Link>
          {
            productFetched && <ProductDetails product={product} />
          }
        </div>
      </div>
      {
        productFetched &&
      <SuggestionBlock />
      }
    </section>
  );
}

export default ProductDetailsClient