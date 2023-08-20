import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        
            <Link href={'/'}>
                {/* <Image
                    src='/logo_white.png'
                    width = {200}
                    height = {200}
                    alt = 'logo'
                /> */}
                <p className='logo_text ml-5'>Harry Potter</p>
            </Link>
        
    </nav>
  )
}

export default Navbar