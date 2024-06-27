"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { CgMenu } from 'react-icons/cg';

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: '#', label: 'Home' },
  { href: '#portfolio', label: 'Profile' },
  { href: '#project', label: 'Project' },
  { href: '#contact', label: 'Contact' },
];

const NavLinks = () => {
  const [ mobileDrawerOpen, setMobileDrawerOpen ] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  return (
    <nav className="navbar sticky container mx-auto p-6 bg-base-300 bg-opacity-75 backdrop-blur-lg top-0 left-0 z-10 font-mono">
      <div className='flex px-4 mx-auto relative'>
        <div className="flex justify-between items-center">
          <header className='pt-2'>
            <h1 className="flex font-extrabold text-2xl hover:text-green-400"><Link href="#">joe-boadi</Link></h1>
          </header>
          <div className="hidden md:flex space-x-6 md: ml-16 pl-16 font-bold right-4 text-sm">
            {navLinks.map((link, index) => (
              <Link key={link.href} href={link.href}>
                <div className="hover:text-green-500 hover:underline m-2">{link.label}</div>
              </Link>
            ))}
          </div>
          <div className='lg:hidden md:flex-col justify-end'>
              <button onClick={toggleNavbar}>
                  {mobileDrawerOpen ? <AiOutlineClose className='text-2xl font-bold' /> : <CgMenu className="text-2xl font-bold" />}
              </button>
          </div>
        </div>
            {mobileDrawerOpen && (
              <div className="fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden md:hidden bg-opacity-75 backdrop-blur-lg">
              <ul>
                {navLinks.map((link, index) => (
                  <Link key={link.href} href={link.href}>
                      <li className='hover:text-green-500 hover:underline active:text-green-400 active:underline'>{link.label}</li>
                  </Link>
                ))}
              </ul>
          </div>
            )}
      </div>
        
    </nav>
  );
};

export default NavLinks;