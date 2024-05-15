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
    <header className="sticky m-2 p-3 flex justify-between items-center">
        <div className="flex">
          <h1 className="left-0 font-extrabold text-xl">joe-boadi</h1>
        </div>
        <nav className="flex justify-center text-sm">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <div className="m-2">{link.label}</div>
            </Link>
          ))}
        </nav>
    </header>
  );
};

export default NavLinks;