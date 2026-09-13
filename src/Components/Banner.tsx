import heroImage from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>

        
        <div className='flex flex-col justify-center'>
          <h1 className='text-4xl md:text-5xl font-bold leading-tight mb-5'>
            Build Your Ideal
            <br />
            <span className='text-gradient'>Development Stack</span>
          </h1>

          <p className='text-gray-600 text-base mb-8 leading-relaxed max-w-lg'>
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className='flex flex-col sm:flex-row gap-4'>
            <button className='px-5 py-2.5 rounded-lg bg-gradient-brand text-white text-sm font-semibold hover:shadow-lg transition-all duration-300'>
              Explore Technologies
            </button>
            <button className='px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-all duration-300'>
              Learn More
            </button>
          </div>
        </div>

        
        <div className='flex justify-center items-center'>
          <img src={heroImage} alt='Dev Stack Hero' className='w-full max-w-sm md:max-w-md' />
        </div>
      </div>
    </section>
  );
};

export default Banner;