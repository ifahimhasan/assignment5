import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

  return (
    <header className='sticky top-0 z-50 bg-white border-b border-gray-200'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>

        
        <button
          className='md:hidden text-2xl text-gray-700'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>

        
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center text-white font-bold'>DS</div>
          <span className='text-xl font-bold text-gradient'>Dev Stack</span>
        </div>

        
        <ul className='hidden md:flex gap-8 items-center'>
          {navLinks.map((link) => (
            <li key={link}>
              <a href='#' className='text-gray-600 hover:text-purple-600 transition-all duration-300'>{link}</a>
            </li>
          ))}
        </ul>

        
        <div className='flex items-center gap-2 sm:gap-4'>
          <button className='text-sm sm:text-base text-gray-900 font-semibold hover:text-purple-600 transition-all duration-300'>
            Sign In
          </button>
          <button className='px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-brand text-white text-sm sm:text-base font-semibold hover:shadow-lg transition-all duration-300'>
            Sign Up
          </button>
        </div>
      </nav>

      
      {isMenuOpen && (
        <div className='md:hidden bg-white border-t border-gray-200'>
          <ul className='flex flex-col gap-4 p-4'>
            {navLinks.map((link) => (
              <li key={link}>
                <a href='#' onClick={() => setIsMenuOpen(false)} className='text-gray-600 hover:text-purple-600'>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;