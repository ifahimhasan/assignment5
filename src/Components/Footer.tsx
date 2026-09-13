import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 mt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        
       
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-gray-700'>
          
         
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <div className='w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm'>
                DS
              </div>
              <span className='text-lg font-bold text-white'>Dev Stack</span>
            </div>
            <p className='text-sm text-gray-400 mb-4'>
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className='flex gap-4'>
              <a
                href='#github'
                className='hover:text-white transition-all duration-300'
                title='GitHub'
              >
                <FaGithub size={20} />
              </a>
              <a
                href='#twitter'
                className='hover:text-white transition-all duration-300'
                title='Twitter'
              >
                <FaTwitter size={20} />
              </a>
              <a
                href='#linkedin'
                className='hover:text-white transition-all duration-300'
                title='LinkedIn'
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

         
          <div>
            <h4 className='text-white font-semibold mb-4'>Product</h4>
            <ul className='space-y-2'>
              {['Home', 'Technologies', 'Projects'].map((link) => (
                <li key={link}>
                  <a href='#' className='text-sm text-gray-400 hover:text-white transition-all duration-300'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h4 className='text-white font-semibold mb-4'>Company</h4>
            <ul className='space-y-2'>
              {['About', 'Contact', 'Careers'].map((link) => (
                <li key={link}>
                  <a href='#' className='text-sm text-gray-400 hover:text-white transition-all duration-300'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h4 className='text-white font-semibold mb-4'>Legal</h4>
            <ul className='space-y-2'>
              {['Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <a href='#' className='text-sm text-gray-400 hover:text-white transition-all duration-300'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        <div className='flex flex-col sm:flex-row justify-between items-center'>
          <p className='text-sm text-gray-500'>
            © 2024 Dev Stack. All rights reserved.
          </p>
          <div className='flex gap-6 mt-4 sm:mt-0'>
            <a href='#' className='text-sm text-gray-400 hover:text-white transition-all duration-300'>
              Privacy
            </a>
            <a href='#' className='text-sm text-gray-400 hover:text-white transition-all duration-300'>
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;