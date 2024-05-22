import React from 'react';
import Link from 'next/link';

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
  return (
    <nav className="flex navbar fixed bg-base-300 bg-opacity-75 backdrop-blur-lg top-0 z-10 w-full p-3 font-mono">
        <header>
          <h1 className="left-0 font-extrabold text-2xl"><Link href="#">joe-boadi</Link></h1>
        </header>
        <div className="right-4 text-sm ml-auto">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <div className="hover:text-green-500 hover:underline m-2">{link.label}</div>
            </Link>
          ))}
        </div>
    </nav>
  );
};

export default NavLinks;