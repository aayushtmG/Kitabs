'use client'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const icons ={
  products: (<svg className="fill-current h-5 w-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>),
  profile:(<svg className="fill-current h-5 w-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>)
}

const SideBar = ()=>{
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
    return <nav className="w-64 flex-shrink-0">
    <div className="flex-auto h-full shadow-md">
      <div className="flex flex-col overflow-y-auto">
        <ul className="relative m-0 p-0 h-full ">
          <li className="text-text-primary text-4xl p-4 w-full flex relative shadow-sm justify-start border-b-2 border-gray-700 font-medium mb-2">
                        {/*company name*/}
                        <Link href='/'>Kitabs</Link>
          </li>
          <ListComponent title={'Profile'} icon={icons.profile} active={path == '/admin'} address={'/admin'} />
      <div
          className="flex-auto  cursor-pointer mt-1"
        onClick={toggleDropdown}
      >
        <ListComponent title={'Products'} icon={icons.products} active={path.startsWith('/admin/products')} address={'/admin/products/'} />
      </div>
       </ul>
      </div>
    </div>
  </nav>
}
export default SideBar

const ListComponent = ({title,active,icon,address})=>{
        return <Link href={address}>
        <div className={`text-text-primary  flex relative px-4 py-2 hover:bg-white hover:text-secondary border-2 border-text-primary hover:border-secondary  transition-colors cursor-pointer  rounded-md ${active && 'border-transparent bg-secondary text-white'}`} > 
        <div className="mr-4 my-auto">
              {icon}
            </div>
            <div className="flex-auto my-1">
              <span>{title}</span>
            </div>
          </div>
</Link>
}