'use client'
import Link from 'next/link';
import React, { useState,useEffect, useContext} from 'react';
import Modal from '@/components/ui/Modal'
import ProductForm from '@/components/(dashboard)/ProductForm'
import Notifier from '@/components/ui/Notifier'
import { NotifierContext } from '@/context/NotifierContext';

const PRODUCTS_PER_PAGE=10

const categoryList=[
  'All Products',
  'Gaming Chair',
  'Office Chair',
  'House Chair'
]

function ProductList() {
  const [products, setProducts] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [category, setCategory] = useState(categoryList[0]); 

  //for post
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/products`) 
    const body = await response.json()
    pagination(body.products)
    setIsLoading(false)
  }
  useEffect(()=>{
    fetchProducts();
  },[])


  // Sorting function
  const sortProducts = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    const sorted = [...products].sort((a, b) => {
      if(key == 'name'){
        return  direction === 'asc' ? a[key].slice(8).localeCompare(b[key].slice(8)) :  b[key].slice(8).localeCompare(a[key].slice(8)); 
      }
        return direction === 'asc' ? a[key] - b[key] : b[key] - a[key];
    });
    setProducts(sorted);
    setSortConfig({ key, direction });
  };
  const [modalProduct ,setModalProduct] = useState({})
  //handle modal
  const handleModal = (action,product = {})=>{
    setModalProduct({action,product})
    setIsModalOpen(true)
  }
  const {notifierVisible,notifierMessage,notify} = useContext(NotifierContext)
  const handleDelete = async (product)=>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/products/delete/${product._id}`,{
      method:'DELETE'
    })  
    notify(`Deleted ${product.title}`)
    fetchProducts()
  }

  return (
    <div className="md:mx-8 p-6 bg-white rounded-lg ">
      {notifierMessage && <Notifier message={notifierMessage} visible={notifierVisible}/>}
      <Modal isOpen={isModalOpen} onClose={setIsModalOpen}>
        <ProductForm product={modalProduct.product} fetchProducts={fetchProducts} closeModal={()=> setIsModalOpen(false)} action={modalProduct.action}/>
      </Modal>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Product List</h2>
        <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-transparent hover:text-secondary border border-secondary transition-colors" onClick={()=>handleModal('add')}> 
        Add New Product
        </button>
      </div>
      <ProductListTable 
      sortProducts={sortProducts} 
      sort={{sortConfig,setSortConfig}} 
      products={products}
      handleModal={handleModal}
      handleDelete={handleDelete}
      />
    </div>
  );
}

export default ProductList;

{/* Table*/}
function ProductListTable({handleDelete,sortProducts,sort,products,handleModal}){
  // Function to render sort arrows (only up or down)
  const renderSortArrow = (key) => {
    if (sort.sortConfig.key === key) {
      return sort.sortConfig.direction === 'asc' ? '▲' : '▼';
    }
    return '▲'; // Default is ascending
  };
  return <div className="overflow-x-auto shadow-lg">
        <table className="min-w-full bg-white border rounded">
          <thead>
            <tr className="bg-text-primary text-white">
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left cursor-pointer" onClick={()=> sortProducts('name')} >Product Name {renderSortArrow('name')}</th>
              <th
                className="py-2 px-4 text-left cursor-pointer"
                onClick={() => sortProducts('price')}
              >
                Price {renderSortArrow('price')}
              </th>
              <th
                className="py-2 px-4 text-left cursor-pointer"
                onClick={() => sortProducts('stock')}
              >
                Stock {renderSortArrow('stock')}
              </th>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product._id}
                className={`border-t hover:bg-gray-100 ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{product.title}</td>
                <td className="py-2 px-4">${product.price}</td>
                <td className="py-2 px-4">{product.stock}</td>
                <td className="py-2 px-4">{product.category}</td>
                <td className="py-2 px-4 text-center">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600" onClick={()=>handleModal('update',product)}>
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" onClick={()=> handleDelete(product)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
}
