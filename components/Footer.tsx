import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

const footerSections = [
  {
    title: 'Top Features',
    links: ['Fast Shipping', '24/7 Support', 'Easy Returns', 'Exclusive Deals', 'Secure Payments'],
  },
  {
    title: 'Featured Products',
    links: ['Smart Phones', 'Fashion Accessories', 'Home Appliances', 'Laptops', 'Outdoor Gears'],
  },
  {
    title: 'About Us',
    links: ['Our Story', 'Mission and Vision', 'Careers', 'Privacy Policy', 'Terms of Services'],
  },
  {
    title: 'Follow Us',
    links: ['Facebook', 'Twitter', 'Instagram', 'Pinterest', 'LinkedIn'],
  },
];

const socialLinks = [
  { href: '', label: 'Facebook', icon: <svg className="h-6 w-6 fill-current" viewBox="0 0 32 32"><path d="M20 3h-3c-2.76 0-5 2.24-5 5v3H9v4h3v9h4v-9h3.62l.38-4H16V8c0-.55.45-1 1-1h3V3Z" /></svg> },
  { href: 'https://x.com/jostechfest', label: 'LinkedIn', icon: <svg className="h-6 w-6 fill-current" viewBox="0 0 32 32"><path d="M12 12h5v2h.07c.69-1.23 2.37-2.53 4.93-2.53C25.1 11.47 27 13.15 27 16.73v7.52h-4v-6.52c0-1.54-.59-2.6-2.05-2.6-1.11 0-1.77.75-2.06 1.47-.11.27-.14.64-.14 1.02v6.63h-4V12Zm-5 14H3V12h4v14ZM5 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" /></svg> },
  { href: 'https://x.com/jostechfest', label: 'Discord', icon: <FaDiscord className="text-lg mt-1" /> },
  { href: 'https://x.com/jostechfest', label: 'Twitter', icon: <svg className="h-6 w-6 fill-current" viewBox="0 0 32 32"><path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" /></svg> },
  { href: '', label: 'Youtube', icon: <IoLogoYoutube className="text-lg mt-1" /> },
];

export default function Footer() {
  return (
    <div className='parent bg-[#172755]'>
      <div className="w-[90%] mx-auto grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {footerSections.map((section, idx) => (
          <div key={idx} className="space-y-4 ml-10 md:ml-8">
            <h3 className="text-sm font-semibold text-[#B3B3B3]">{section.title}</h3>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a className="text-white font-normal text-xs transition" href="#0">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='flex flex-col lg:flex-row justify-between mt-6 ml-10 md:ml-16'>
        <div className="flex flex-col sm:flex-row justify-start text-white mx-2 mb-4 space-y-2 sm:space-y-0">
          <div className="flex items-center">
            <span className="text-[#B3B3B3] m">
              <RxHamburgerMenu />
            </span>
            <h2 className="w-[90px] h-[32px] font-bold text-lg ml-2 ">Test man</h2>
          </div>
          <p className="w-[283px] h-[23px] font-normal text-sm lg:mt-1.5">
            © 2023 Test man. All rights reserved.
          </p>
        </div>
        <ul className="h-[24px] inline-flex  gap-2 mx-2">
          {socialLinks.map((social, idx) => (
            <li key={idx}>
              <a
                className="flex justify-center text-[#B3B3B3] font-normal text-xs transition"
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}