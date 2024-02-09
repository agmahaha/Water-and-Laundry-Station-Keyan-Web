import Link from 'next/link'
import 'tailwindcss/tailwind.css'
const Navbar = () => {
  return (
    <div className="bg-blue-800 py-4 rounded-xl fixed w-11/12
     z-100 top-1 flex justify-between">
        <div> 
            <Link href="/" className='text-white font-bold text-lg'>Logo</Link>
        </div>
        <div className='flex space-x-4 text-white'>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/auth/login">Login/SignUp</Link>
        </div>
     </div>
  )
}

export default Navbar