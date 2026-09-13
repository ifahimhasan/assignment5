import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

interface HeaderProps {
  selectedCount: number;
}

const Header = ({ selectedCount }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

  return (
    <header className='sticky top-0 z-50 bg-white shadow-md'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
        
    
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold'>
            DS
          </div>
          <span className='text-xl font-bold text-gradient'>Dev Stack</span>
        </div>

      
        <ul className='hidden md:flex gap-8 items-center'>
          {navLinks.map((link) => (
            <li key={link} className='text-gray-600 hover:text-purple-600 transition-all duration-300 cursor-pointer'>
              {link}
            </li>
          ))}
        </ul>

    
        <div className='flex items-center gap-3'>
          <div className='hidden sm:flex gap-3'>
            <button className='text-gray-600 hover:text-purple-600 font-semibold transition-all duration-300'>
              Sign In
            </button>
            <button className='btn btn-sm bg-gradient-to-r from-purple-600 to-pink-500 text-white border-none hover:shadow-lg transition-all duration-300'>
              Sign Up
            </button>
          </div>

       
          <button
            className='md:hidden text-2xl'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </nav>

     
      {isMenuOpen && (
        <div className='md:hidden bg-white border-t'>
          <ul className='flex flex-col gap-4 p-4'>
            {navLinks.map((link) => (
              <li key={link} className='text-gray-600 hover:text-purple-600 cursor-pointer'>
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;