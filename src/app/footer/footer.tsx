import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Logo from '../components/logo'

// Prevent FontAwesome from adding its CSS since we did it manually above
config.autoAddCss = false;

// Mock data for important links and social media links
const importantLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
];

const socialMediaLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: faFacebook },
  { name: "Twitter", href: "https://twitter.com", icon: faTwitter },
  { name: "Instagram", href: "https://instagram.com", icon: faInstagram },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            {/* Replace with actual logo component or image */}
            {/* <h1 className="text-3xl font-bold">пазарче</h1> */}
            <Logo/>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            {importantLinks.map(link => (
              <Link key={link.name} href={link.href}>
                <span className="hover:underline cursor-pointer text-lg">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center md:justify-between items-center">
          <div className="flex gap-6">
            {socialMediaLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-400"
              >
                <FontAwesomeIcon icon={link.icon} />
              </a>
            ))}
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <p className="text-sm">© 2024 Пазарче. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
