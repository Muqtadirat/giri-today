interface NavLinksProps {
  title: string;
  href: string;
}

const navLinks: NavLinksProps[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Work', href: '/work' },
  { title: 'Contact me', href: '#contact' },
];

export default navLinks;
