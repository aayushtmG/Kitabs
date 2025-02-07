'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {setTotal, addItem, clearCart, removeItem } from 'store/slices/cartSlice';
import { IoMdCart } from "react-icons/io"
import CartList from '@/components/CartList'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet"

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
  const {isAuthenticated} = useSelector(state=> state.user);
  const {items,total } = useSelector(state => state.cart);
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(setTotal())
  }, [items])
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
        <ul className='md:flex items-center justify-between xl:w-1/2 w-full hidden '>
            {NavLinks.map(({name,route})=>
              <li 
              key={name}
                className={`${urlPath === route ? 'text-secondary font-bold':''}`}
              >
                <Link href={route}>{name}</Link>
              </li>
            )}
          <Sheet>
            <SheetTrigger className="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-lg focus:outline-none ">
              <IoMdCart className="text-2xl  hover:text-secondary cursor-pointer transition-colors ease-out duration-300"></IoMdCart>
              <span className="sr-only">Notifications</span>
              <span
                className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-secondary border-2 border-white rounded-lg -top-1 -end-2 "
                id="waht"
              >
                {items.length}
              </span>
            </SheetTrigger>
            <SheetContent className="max-md:w-5/6 ">
              <SheetHeader>
                <SheetTitle >Items in cart:</SheetTitle>
              </SheetHeader>
              <CartList
                itemList={items}
                total={total}
                resetStore={clearCart}
              />
            </SheetContent>
          </Sheet>
            {
              isAuthenticated ? 
              <li 
              className="bg-primary text-white p-1 px-4 rounded-md border border-primary hover:bg-transparent transition-colors hover:text-primary"
              >
                <Link href={'/admin'}>Dashboard</Link>
              </li> :
              <li 
              className="bg-primary text-white p-1 px-4 rounded-md border border-primary hover:bg-transparent transition-colors hover:text-primary"
              >
                <Link href={'/admin/login'}>Login</Link>
              </li>
            }
        </ul>
          {/* Mobile Navigation */}
          <div className='md:hidden flex w-full pr-4 justify-end'>
          <Sheet>
            <SheetTrigger className="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-lg focus:outline-none ">
              <IoMdCart className="text-2xl  hover:text-secondary cursor-pointer transition-colors ease-out duration-300"></IoMdCart>
              <span className="sr-only">Notifications</span>
              <span
                className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-secondary border-2 border-white rounded-lg -top-1 -end-2 "
                id="waht"
              >
                {items.length}
              </span>
            </SheetTrigger>
            <SheetContent className="max-md:w-5/6 ">
              <SheetHeader>
                <SheetTitle >Items in cart:</SheetTitle>
              </SheetHeader>
              <CartList
                itemList={items}
                total={total}
                resetStore={clearCart}
              />
            </SheetContent>
          </Sheet>
          </div>

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
          {isMenuActive ? <FontAwesomeIcon icon={faXmark} color='#0074D9'/> : 
          <FontAwesomeIcon icon={faBars} color='#0074D9'/>}
        </button>
      </nav>
    </header>
    </>
  )
}
