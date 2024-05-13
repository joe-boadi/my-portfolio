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
    <div className="m-2 p-1 flex justify-center text-sm">
      {navLinks.map((link, index) => (
        <Link key={index} href={link.href}>
          <div className="m-2">{link.label}</div>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;