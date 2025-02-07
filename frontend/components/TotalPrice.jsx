export default function TotalPrice({ total }) {
  return (
    <div className="flex p-4 font-poetsen items-center gap-4   w-full">
      <h1 className="text-3xl">Total:</h1>
      <span className="text-2xl text-secondary">$ {Number(total).toFixed(2)}</span>
    </div>
  )
}
