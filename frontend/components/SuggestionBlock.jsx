'use client'
import ProductCard from '@/components/ProductCard'
import { useEffect, useRef,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight,faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

//todo 
//remove the product  and fetch products according to the category
function SuggestionBlock() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -200, // Adjust scroll distance as needed
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 200, // Adjust scroll distance as needed
      behavior: "smooth",
    });
  };
  const [suggestedProducts,setSuggestedProducts] = useState([]);
  const [productFetched,setProductFetched] = useState(false);

  const fetchProducts= async()=>{
    const response = await fetch(`https://kitabs.onrender.com/api/products`)
    const body = await response.json();
    setSuggestedProducts(body.products);
  }

  useEffect(()=>{
    fetchProducts()
  },[])
  useEffect(()=>{
    if(suggestedProducts.length > 0){
      setProductFetched(true)
    }
  },[suggestedProducts])

  return (
    <div className="px-10 mx-auto max-w-6xl mt-14">
      <h3 className="leading-relaxed font-extrabold text-3xl text-text-primary/80 py-2">
        Other Suggestions
      </h3>
      <div className="max-w-full relative px-4">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 top-0 bottom-0 -translate-x-8 p-2 rounded-lg"
        >
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="text-4xl text-text-primary/50 hover:text-secondary transition-colors"
          />
        </button>

        {/* Listing Products */}
        <div
          className="flex overflow-x-auto snap-x snap-mandatory space-x-8 p-10 max-w-full relative"
          ref={scrollContainerRef}
        >

          {productFetched && suggestedProducts.map((product) => (

            <div
              className="flex-shrink-0 snap-center" // Snap each card to center
              key={product._id}
            >
              <ProductCard
                id={product._id}
                productImages={product.images}
                productName={product.title}
              />
            </div>
            ))
            }
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 top-0 bottom-0 translate-x-8 p-2 rounded-lg"
        >
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="text-4xl text-text-primary/50 hover:text-secondary transition-colors"
          />
        </button>
      </div>
    </div>
  );
}

export default SuggestionBlock;
