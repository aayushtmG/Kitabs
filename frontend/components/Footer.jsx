import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import {faFacebook, faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="mt-20 bg-primary pt-10">
      {/* upper section */}
      <div className="flex flex-col items-center justify-center lg:justify-evenly lg:w-4/5 mx-auto gap-4 md:flex-row ">
        <div>
          <h3  className="my-2 ">Information</h3>
          <ul className="flex flex-col items-center">
            <li>
              <Link href={'/'}>About Us</Link>
            </li>
            <li>
              <Link href={'/contact'}>Contact Us</Link>
            </li>
            <li>
              <Link href={'/products'}>Our Products</Link>
            </li>
          </ul>
        </div>
        <div>
            <h3 className="my-2">Collections</h3>
            <ul className="flex flex-col items-center">
              <li>
                <Link href={'/'}>Wooden Chair</Link>
              </li>
              <li>
                <Link href={'/contact'}>Gaming Chair</Link>
              </li>
              <li>
                <Link href={'/products'}>House Chair</Link>
              </li>
            </ul>
        </div>
        <div >
            <h3 className="my-2 text-center md:text-start">Newsletter</h3>
            <div className="flex flex-col justify-center items-center  md:items-start space-y-2">
                <p className="opacity-50 text-sm lg:text-base"> Subscribe to get latest news,update and information. </p>
              <form className="flex items-center border rounded-md overflow-hidden shadow-lg">
                <input
                  type="email"
                  placeholder="Enter Email Here..."
                  className="flex-1 px-4 py-2 text-sm text-gray-700 outline-none"
                />
                <button className="bg-secondary px-4 py-2 text-white hover:bg-secondary/80 transition-colors">
                  <FontAwesomeIcon icon={faPaperPlane}/>
                </button>
              </form>
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div className="bg-primary mt-20 flex flex-col items-center py-8 gap-4 ">
        <ul className="flex gap-4 ">
          <li><Link href={'/'}><FontAwesomeIcon icon={faFacebook} /></Link></li>
          <li><Link href={'/'}><FontAwesomeIcon icon={faInstagram} /></Link></li>
          <li><Link href={'/'}><FontAwesomeIcon icon={faWhatsapp} /></Link></li>
        </ul>
        <h4 className="text-text-primary">©developed by BICTE Balkumari</h4>
      </div>
    </footer>
  )
}

