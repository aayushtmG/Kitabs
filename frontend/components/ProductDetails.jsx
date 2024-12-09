'use client'
import ProductImageDisplay from "@/components/ProductImageDisplay"
import ProductInfo from "@/components/ProductInfo"

function ProductDetails({ product }) {
  return (
    <div className="h-full mx-auto space-y-20 min-h-128 ">
      <div className="flex gap-20 flex-col max-md:items-center md:flex-row md:justify-center ">
      <ProductImageDisplay  images={product.images} title={product.title}/>
      <ProductInfo productData={product} />
      </div>
    </div>
  )
}

export default ProductDetails
