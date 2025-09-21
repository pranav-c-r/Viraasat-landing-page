"use client";
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Impact', href: '#impact' },
  { name: 'How It Works', href: '#howitworks' },
  { name: 'Community', href: '#community' },
  { name: 'CTA', href: '#cta' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-royalIndigo/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/iconlogoremovebg.png"
            alt="Viraasat Icon"
            width={180}
            height={180}
            className="h-12 w-auto object-contain"
            priority
          />
          <Image
            src="/textlogo removebg.png"
            alt="Viraasat Text Logo"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>
        <ul className="hidden md:flex gap-8 text-ivoryWhite font-medium">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="px-3 py-2 rounded-lg hover:bg-goldAccent/20 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile menu button placeholder */}
        <div className="md:hidden">
          {/* Add mobile menu logic here if needed */}
        </div>
      </div>
    </nav>
  );
}
