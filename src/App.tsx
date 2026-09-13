import { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import TechnologyGrid from './components/TechnologyGrid';
import YourStack from './components/YourStack';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { Technology } from './types/technology';
import './index.css';

// Fetch technologies from JSON
const fetchTechnologies = async (): Promise<Technology[]> => {
  const response = await fetch('/technologies.json');
  if (!response.ok) throw new Error('Failed to load technologies');
  return response.json();
};

function App() {
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);

  const technologiesPromise = fetchTechnologies();

  const handleAddTech = (tech: Technology) => {
    const isAlreadyAdded = selectedTechs.some((t) => t.id === tech.id);
    if (!isAlreadyAdded) {
      setSelectedTechs([...selectedTechs, tech]);
    }
  };

  const handleRemoveTech = (id: string) => {
    setSelectedTechs(selectedTechs.filter((tech) => tech.id !== id));
  };

  const handleClearAll = () => {
    setSelectedTechs([]);
  };

  return (
    <>
      <Header selectedCount={selectedTechs.length} />
      <Banner />

      {/* Main Content */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20'>
        <div className='mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold mb-3'>
            Explore the <span className='text-gradient'>Technologies</span>
          </h2>
          <p className='text-gray-600 text-lg'>
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Grid + Sidebar Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Technology Grid */}
          <div className='lg:col-span-2'>
            <TechnologyGrid
              technologiesPromise={technologiesPromise}
              selectedTechs={selectedTechs}
              onAddTech={handleAddTech}
            />
          </div>

          {/* Your Stack Sidebar */}
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

      {/* Toast Notifications */}
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