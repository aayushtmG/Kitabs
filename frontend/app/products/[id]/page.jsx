import ProductDetailsClient from "@/components/ClientComponent"
import MainLayout from "layouts/MainLayout"

async function Page({params}) {
  const id = (await params).id
  return (
    <MainLayout>
    <ProductDetailsClient productId={id}/>
    </MainLayout>)
}

export default Page