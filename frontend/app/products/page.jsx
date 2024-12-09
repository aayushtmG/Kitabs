'use client'
import ProductListings from "@/components/ProductListing"
import Pagination from '@/components/Pagination'
import { useEffect, useState } from "react"

const categoryList=[
  'All Products',
  'Gaming Chair',
  'Office Chair',
  'House Chair'
]
const sortList=[
  'low to high',
  'high to low',
]

const PRODUCTS_PER_PAGE=12

export default function Page() {
  //for filter
  const [category, setCategory] = useState(categoryList[0]); 
  const [sort, setSort] = useState(sortList[0])

  //for post
  const [products,setProducts] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [currentPage,setCurrentPage] = useState(1);
  const [productsPerPage,setProductsPerPage] = useState(PRODUCTS_PER_PAGE);


  const handleCategoryChange= (newCategory)=>{
      setCategory(newCategory)
  }
  const handleSortChange = (newSort)=>{
    setSort(newSort);
  }

  //get current posts
  function pagination(products){
    const indexOfLastProduct= currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct)
    setProducts(currentProducts)
  }

  //change Page
  const paginate = pageNumber => setCurrentPage(pageNumber); 

  const fetchProducts = async()=>{
    const response = await fetch('http://127.0.0.1:5000/api/products') 
    const body = await response.json()
    pagination(body.products)
    setIsLoading(false)
  }

  useEffect(()=>{
    fetchProducts();
  },[])

  return <div className="pt-24 w-4/5 mx-auto">
       <h1 className='text-xl xl:text-4xl font-bold text-text-primary text-center mb-10'>All Products</h1>
       {/* filters */}
       <div className="max-w-6xl mx-auto flex gap-2 justify-between">
        {/* category */}
        <div className="space-x-2">
          <label className="text-gray-500 text-base">Category:</label>
          <select
            id="category-selector"
            name="category-selector"
            onChange={(event) => handleCategoryChange(event.target.value)}
            value={category}
            className="border border-gray-300 rounded-md text-text-primary px-4 py-1 bg-transparent shadow-sm "
          >
            {
              categoryList.map(item => (
                <option
                  id={item}
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))
            }
          </select>
        </div>
          {/* sort */}
          <div className="space-x-2">
          <label className="text-gray-500 text-base">Price Sort:</label>
          <select
            id="sort-selector"
            name="sort-selector"
            onChange={(event) => handleSortChange(event.target.value)}
            value={sort}
            className="border border-gray-300 rounded-md text-text-primary px-4 py-1 bg-transparent shadow-sm "
          >
            {
              sortList.map(item => (
                <option
                  id={item}
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))
            }
          </select>
          </div>
       </div>
        {
          isLoading ? <div><h3>Loading....</h3></div>:
        <ProductListings products={products}></ProductListings>
        }
        {
        products.length > 1 &&
        <Pagination  totalProducts={products.length} productsPerPage={productsPerPage} paginate={paginate} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        }
  </div>
}