'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const NavLinks = [
  {name:  'Home',route:  '/'},
  {name:  'Products',route:   '/products'},
  {name:  'About Us',route:   '/about'},
  {name:  'Contact',route:   '/contact'},
];

export default function Header() {
  const urlPath = usePathname();
  const [isMenuActive,setIsMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
    <header className={`fixed z-50 w-full ${isScrolled && 'bg-white shadow-md'} transition-colors  `}>
      <nav className={`flex max-lg:px-2 py-4 lg:w-4/5 mx-auto justify-between items-center`}>
        <Link href={'/'} >
          <img src="/images/logo.png" alt="logo" width={200} height={0}/>
        </Link>
        <ul className='md:flex items-center justify-between md:w-1/2 hidden '>
            {NavLinks.map(({name,route})=>
              <li 
              key={name}
                className={`${urlPath === route ? 'text-secondary font-bold':''}`}
              >
                <Link href={route}>{name}</Link>
              </li>
            )}
              <li 
              className="bg-primary text-white p-1 px-4 rounded-md border border-primary hover:bg-transparent transition-colors hover:text-primary"
              >
                <Link href={'/admin/login'}>Login</Link>
              </li>
        </ul>
          {/* Mobile Navigation */}
           <ul
            className={`fixed top-0 pt-20 pb-10 -z-10 right-0 rounded-md bg-white w-1/2 shadow-lg flex flex-col justify-center pl-10 transition-transform duration-300 ${
              isMenuActive ? 'translate-x-0' : 'translate-x-full'
            } md:hidden `}
          >
            {NavLinks.map(({ name, route }) => (
              <li
                key={name}
                className={`${urlPath === route ? 'text-secondary font-bold':''}`}
              >
                <Link href={route}  onClick={() => setIsMenuActive(false)}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        <button className='max-md:block hidden rounded-md border-2 border-secondary p-3 w-10' onClick={()=> setIsMenuActive(!isMenuActive)}>
          {isMenuActive ? <FontAwesomeIcon icon={faXmark} color='#e99c2e'/> : 
          <FontAwesomeIcon icon={faBars} color='#e99c2e'/>}
        </button>
      </nav>
    </header>
    </>
  )
}
