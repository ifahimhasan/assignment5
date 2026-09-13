import type { Technology } from '../types/technology';
import TechnologyCard from './TechnologyCard';

interface TechnologyGridProps {
  technologies: Technology[];
  loading: boolean;
  selectedTechs: Technology[];
  onAddTech: (tech: Technology) => void;
}

const TechnologyGrid = ({
  technologies,
  loading,
  selectedTechs,
  onAddTech,
}: TechnologyGridProps) => {

  
  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-96'>
        <div className='flex flex-col items-center gap-4'>
          <div className='w-8 h-8 border-4 border-gray-200 border-t-purple-600 rounded-full animate-spin' />
          <p className='text-gray-600 font-medium'>Loading technologies...</p>
        </div>
      </div>
    );
  }

  
  if (technologies.length === 0) {
    return (
      <div className='text-center py-20'>
        <p className='text-gray-600 font-medium mb-1'>Could not load technologies.</p>
        <p className='text-gray-400 text-sm'>Please refresh the page and try again.</p>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {technologies.map((tech) => {
        const isAdded = selectedTechs.some((selected) => selected.id === tech.id);
        return (
          <TechnologyCard
            key={tech.id}
            tech={tech}
            isAdded={isAdded}
            onAdd={onAddTech}
          />
        );
      })}
    </div>
  );
};

export default TechnologyGrid;