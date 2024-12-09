
function Pagination({totalProducts,productsPerPage,paginate,currentPage,setCurrentPage}) {

  const pageNumbers = [] 
  for(let i = 1; i <=  Math.ceil(totalProducts/productsPerPage); i++){
    pageNumbers.push(i);
  }
  const handlePrevious=()=>{
    if(currentPage > pageNumbers[0]){
      setCurrentPage(currentPage => --currentPage);
    }
  }
  const handleNext=()=>{
    if(currentPage  < pageNumbers.length ){
    setCurrentPage(currentPage => ++currentPage);
   }
  }
  return (
    <div className=" flex justify-center mt-10">
    <nav>
      <ul className="flex items-center h-10 text-base ">
      <li>
       <button href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:text-white hover:bg-secondary  transition-colors" onClick={handlePrevious}>
        <span className="sr-only">Previous</span>
      <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
      </svg>
    </button>
   </li>
        {
          pageNumbers.map((pageNumber)=>
        <li key={pageNumber}>
          <button href="#" className={` transition-colors flex items-center justify-center px-4 h-10  bg-white  hover:text-white hover:bg-secondary hover:border-secondary ${currentPage == pageNumber ? "text-secondary border border-secondary " : "border border-gray-300"}`} onClick={()=> currentPage != pageNumber && paginate(pageNumber)} >{pageNumber}</button>
        </li>
          )
        }
      <li>
       <button href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-secondary hover:text-white transition-colors" onClick={handleNext}>
         <span className="sr-only">Next</span>
         <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
         </svg>
       </button>
        </li>
      </ul>
    </nav>
</div>
  )
}

export default Pagination