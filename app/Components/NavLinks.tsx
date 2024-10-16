"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from "@/app/assets/logo.png"
import Image from 'next/image';

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: '#', label: 'Home' },
  { href: '#project', label: 'Project' },
  { href: '#contact', label: 'Contact' },
];

const NavLinks = () => {

  const [ isMounted, setIsMounted ] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, [router]);

  if(!isMounted) {  
    return null; // Render null until component is fully mounted.
  }

  return (
    <nav className="sticky container font-mono max-w-full top-0 left-0 z-10 m-auto p-6 pb-2 bg-base-300 bg-opacity-75 backdrop-blur-lg">
      <div className='flex mx-auto relative justify-center'>
        <div className="flex justify-between items-center">
          <header className='flex'>
            <Image
              width={50}
              height={50}
              src={Logo} alt={'Logo'}
              className='flex rounded-lg m-auto mr-5 cursor-pointer'
              id='#'
              />
            <h1 className="font-extrabold text-2xl hover:text-green-400"><Link href="#">joe-boadi</Link></h1>
          </header>
          <div className="hidden md:flex space-x-6 md: ml-16 pl-16 font-bold text-sm">
             {navLinks.map((link) => {
              // const isActive = router.pathname === link.href ${isActive ? 'text-green-500' : ''};
              return (
                <Link key={link.href} href={link.href}>
                  <div className={`hover:text-green-500 hover:underline m-2`}>
                    {link.label}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavLinks;

// TODO:
// Add CV/Resume(downloadable) button in navbar