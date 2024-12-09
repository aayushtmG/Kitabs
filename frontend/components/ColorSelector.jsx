
export default function ColorSelector({colorOptions,setColor}) {
  return (
    <div className="my-2">
      <label htmlFor="color" className="font-bold">Color: </label>
      <div className="flex gap-2">
      {
        colorOptions.map((color)=>
          <button className={`w-6 h-6 shadow-sm rounded-md`} style={{backgroundColor: color}} onMouseOver={()=> setColor(color)} key={color}></button> 
        )
      } 
    </div>
    </div> 
  )
}
