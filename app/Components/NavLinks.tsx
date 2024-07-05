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
    <nav className="sticky container font-mono max-w-full top-0 left-0 z-10 m-auto p-6 bg-base-300 bg-opacity-75 backdrop-blur-lg">
      <div className='flex mx-auto relative'>
        <div className="flex justify-between items-center">
          <header className=''>
            <h1 className="flex font-extrabold text-2xl hover:text-green-400"><Link href="#">joe-boadi</Link></h1>
          </header>
          <div className="hidden md:flex space-x-6 md: ml-16 pl-16 font-bold text-sm">
            {navLinks.map((link, index) => (
              <Link key={link.href} href={link.href}>
                <div className="hover:text-green-500 hover:underline m-2">{link.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavLinks;

// TODO:
// Add CV/Resume(downloadable) button in navbar