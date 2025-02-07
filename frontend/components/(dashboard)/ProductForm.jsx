'use client'
import { useContext, useEffect, useState } from 'react';
import  Input  from '@/components/ui/Input';
import  Button  from '@/components/ui/Button';
import  Selector  from '@/components/ui/Selector';
import Notifier from '../ui/Notifier';
import { NotifierContext } from '@/context/NotifierContext';

export default function ProductForm({action='add',product,fetchProducts,closeModal}) {
  const {notifierMessage,notifierVisible,notify} = useContext(NotifierContext)
  const [formData, setFormData] = useState(action == 'add' ? { 
    title:  'New Book',
    category: 'fiction',
    description: '',
    stock:0,
    price:500,
    images:[]
  }: { 
    title:  product.title,
    category:  product.category,
    stock:product.stock,
    price:product.price,
    description:product.description,
    images: product.images
  });

  const addProduct = async(e) => {
    e.preventDefault();
    console.log('adding new product')
    console.log(formData.images)
    const submittingData = new FormData();
    submittingData.append('title',formData.title)
    submittingData.append('category', formData.category)
    submittingData.append('description',formData.description)
    submittingData.append('stock', formData.stock)
    submittingData.append('price', formData.price)
    Array.from(formData.images).forEach(img => {
      submittingData.append('images',img);
    })
    const response = await fetch(`https://kitabs.onrender.com/api/products/add-product`,{
    // const response = await fetch(`http://localhost:5000/api/products/add-product`,{
      method:'POST',
      body:submittingData 
    })
    const body = await response.json()
    console.log(body)
    notify('New Product Added')
    fetchProducts()
    closeModal()
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    await fetch(`https://kitabs.onrender.com/api/products/${product._id}`,{
      method:'PUT',
      headers: {'Content-Type': 'application/json', },
      body: JSON.stringify({
        title: formData.title,
        category: formData.category,
        stock: formData.stock,
        price: formData.price,
        description: formData.description
      }),
    }) 
    fetchProducts()
    notify('Product Updated')
    closeModal()
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleImages = (e) => {
    console.log('adding',e.target.files[0]);
    setFormData(prev => ({
      ...prev,
      [e.target.name] : [...prev.images,e.target.files[0]]
    }));
  };
  return (
 <div className="space-y-4 mx-auto  my-8 max-w-lg max-md:w-4/5">
    <h1 className='text-center capitalize font-semibold text-xl'>{action} Product</h1>
    {notifierMessage && <Notifier message={notifierMessage} visible={notifierVisible}/>}
    <form onSubmit={action == 'add' ? addProduct : updateProduct} className="space-y-6 " encType='multipart/form-data'>
      <Input
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <Selector
      label='Category'
      name='category'
      options={['fiction','non-fiction','kids']}
      value={formData.category}
      onChange={handleChange}
      /> 

      <div className="space-y-2 flex-1">
        <label className="block text-sm font-medium text-gray-700">
          Image
        </label>
        <input
        name='images'
        type='file'
        onChange={handleImages}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        multiple
        />
      </div>

      <div className="space-y-2 flex-1">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
        name='description'
        onChange={handleChange}
        value={formData.description}
        className="whitespace-pre-wrap w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        ></textarea>
      </div>
      <div className='flex justify-between gap-4'>
      <Input
        label="Stock"
        type="number"
        name="stock"
        min='0' 
        value={formData.stock}
        onChange={handleChange}
      />
        <Input
        label="Price"
        name="price"
        type='number'
        min="50"
        value={formData.price}
        onChange={handleChange}
      />
      </div>
      <div className="pt-4">
        <Button type="submit" fullWidth className='border-2 border-secondary bg-secondary hover:bg-transparent hover:text-text-primary text-xl capitalize' >
          {action} Product
        </Button>
      </div>
    </form>
    </div>
  );
}