import heroImage from '../assets/hero-image.png';

const Banner = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center'>
        
        {/* Left Content */}
        <div className='flex flex-col justify-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Build Your Ideal
            <br />
            <span className='text-gradient'> Development Stack</span>
          </h1>
          
          <p className='text-gray-600 text-base md:text-lg mb-8 leading-relaxed'>
            Explore frontend, backend, database, and tooling options. Compare them side by side, and put together the stack that fits your next project.
          </p>

          
          <div className='flex flex-col sm:flex-row gap-4'>
            <button className='btn btn-md bg-gradient-to-r from-orange-500 to-pink-500 text-white border-none hover:shadow-lg transition-all duration-300'>
              Explore Technologies
            </button>
            <button className='btn btn-md btn-outline border-2 text-gray-700 hover:bg-gray-50'>
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className='flex justify-center items-center'>
          <img
            src={heroImage}
            alt='Dev Stack Hero'
            className='w-full max-w-sm md:max-w-md rounded-2xl shadow-2xl'
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;