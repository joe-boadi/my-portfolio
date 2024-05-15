import Link from 'next/link';

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/profile', label: 'Profile' },
  { href: '/project', label: 'Project' },
  { href: '/contact', label: 'Contact' },
];

const NavLinks = () => {
  return (
    <nav className="navbar bg-base-300 top-0 fixed m-2 p-3 justify-between items-center font-mono">
        <header className="flex">
          <h1 className="left-0 font-extrabold text-xl">joe-boadi</h1>
        </header>
        <nav className="flex justify-center text-sm right-2">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <div className="m-2">{link.label}</div>
            </Link>
          ))}
        </nav>
    </nav>
  );
};

export default NavLinks;