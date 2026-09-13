import { useEffect, useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import TechnologyGrid from './components/TechnologyGrid';
import YourStack from './components/YourStack';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import type { Technology } from './types/technology';
import './index.css';

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);

  
  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleAddTech = (tech: Technology) => {
    const isAlreadyAdded = selectedTechs.some((t) => t.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setSelectedTechs([...selectedTechs, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveTech = (id: string) => {
    const tech = selectedTechs.find((t) => t.id === id);
    setSelectedTechs(selectedTechs.filter((t) => t.id !== id));
    if (tech) {
      toast.info(`${tech.name} removed from stack`);
    }
  };

  const handleClearAll = () => {
    if (selectedTechs.length === 0) {
      toast.info('Your stack is already empty!');
      return;
    }
    setSelectedTechs([]);
    toast.warning('All technologies removed from stack');
  };

  return (
    <>
      <Header />
      <Banner />

      
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
        <div className='mb-10'>
          <h2 className='text-3xl md:text-4xl font-bold mb-2'>
            Explore the <span className='text-gradient'>Technologies</span>
          </h2>
          <p className='text-gray-600'>
            Add the technologies you like and build your ideal stack.
          </p>
        </div>

        
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
          <div className='lg:col-span-3'>
            <TechnologyGrid
              technologies={technologies}
              loading={loading}
              selectedTechs={selectedTechs}
              onAddTech={handleAddTech}
            />
          </div>

          <div className='lg:col-span-1'>
            <YourStack
              selectedTechs={selectedTechs}
              onRemoveTech={handleRemoveTech}
              onClearAll={handleClearAll}
            />
          </div>
        </div>
      </section>

      <Footer />

      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;