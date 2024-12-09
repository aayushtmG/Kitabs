import ProductDetailsClient from "@/components/ClientComponent"

async function Page({params}) {
  const id = (await params).id
  return (
    <ProductDetailsClient productId={id}/>
  )
}

export default Page