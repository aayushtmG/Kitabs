import ProductCard from '@/components/ProductCard'

function ProductListings({ products }) {
  return (
    <div className="py-12 max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
      {
        products.map((product, index) => (
                <ProductCard
                  key={product._id}
                  product={product}
                />
        ))
      }
    </div>
  )
}

export default ProductListings