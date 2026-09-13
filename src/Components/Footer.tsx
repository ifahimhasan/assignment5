const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-white border-t border-gray-200 mt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>

        <div className='grid grid-cols-1 md:grid-cols-5 gap-8 mb-8 pb-8 border-b border-gray-200'>

          
          <div className='md:col-span-2'>
            <div className='flex items-center gap-2 mb-4'>
              <div className='w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center text-white font-bold text-xs'>DS</div>
              <span className='text-xl font-bold'>
                <span className='text-gray-900'>Dev </span>
                <span className='text-pink-600'>Stack</span>
              </span>
            </div>

            <p className='text-sm text-gray-600 mb-6 max-w-sm leading-relaxed'>
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className='flex gap-6'>
              <a href='#github' className='text-sm font-semibold text-gray-900 hover:text-purple-600 transition-all duration-300'>GitHub</a>
              <a href='#twitter' className='text-sm font-semibold text-gray-900 hover:text-purple-600 transition-all duration-300'>Twitter</a>
              <a href='#linkedin' className='text-sm font-semibold text-gray-900 hover:text-purple-600 transition-all duration-300'>LinkedIn</a>
            </div>
          </div>

          
          <div>
            <h4 className='text-xs font-bold text-gray-900 uppercase tracking-wider mb-4'>Product</h4>
            <ul className='space-y-3'>
              {['Home', 'Technologies', 'Projects'].map((link) => (
                <li key={link}>
                  <a href='#' className='text-sm text-gray-600 hover:text-purple-600 transition-all duration-300'>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h4 className='text-xs font-bold text-gray-900 uppercase tracking-wider mb-4'>Company</h4>
            <ul className='space-y-3'>
              {['About', 'Contact', 'Careers'].map((link) => (
                <li key={link}>
                  <a href='#' className='text-sm text-gray-600 hover:text-purple-600 transition-all duration-300'>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h4 className='text-xs font-bold text-gray-900 uppercase tracking-wider mb-4'>Legal</h4>
            <ul className='space-y-3'>
              {['Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <a href='#' className='text-sm text-gray-600 hover:text-purple-600 transition-all duration-300'>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        <div className='flex flex-col sm:flex-row justify-between items-center'>
          <p className='text-sm text-gray-500'>© {year} Dev Stack. All rights reserved.</p>
          <div className='flex gap-6 mt-4 sm:mt-0'>
            <a href='#' className='text-sm text-gray-500 hover:text-purple-600 transition-all duration-300'>Privacy</a>
            <a href='#' className='text-sm text-gray-500 hover:text-purple-600 transition-all duration-300'>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;