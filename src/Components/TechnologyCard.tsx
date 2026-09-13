import { AiFillStar } from 'react-icons/ai';
import type { Technology } from '../types/technology';

interface TechnologyCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

const TechnologyCard = ({ tech, isAdded, onAdd }: TechnologyCardProps) => {
  return (
    <div className='bg-white rounded-xl border border-gray-200 p-5 flex flex-col hover:shadow-lg transition-all duration-300'>

      
      <div className='flex items-start justify-between mb-4'>
        <img
          src={tech.icon}
          alt={tech.name}
          className='w-10 h-10 object-contain'
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://placehold.co/40x40?text=Icon';
          }}
        />
        <span className='px-3 py-1 bg-purple-50 text-purple-600 text-xs font-semibold rounded-full'>
          {tech.badge}
        </span>
      </div>

      
      <h3 className='text-lg font-bold text-gray-900 mb-2'>{tech.name}</h3>
      <p className='text-sm text-gray-600 leading-relaxed mb-4 flex-1'>
        {tech.description}
      </p>

      
      <div className='flex flex-wrap items-center gap-3 mb-4'>
        <span className='px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md'>
          {tech.category}
        </span>
        <span className='text-xs text-gray-600'>{tech.difficulty}</span>
        <span className='flex items-center gap-1 text-xs font-semibold text-gray-900'>
          <AiFillStar size={14} className='text-yellow-400' />
          {tech.rating}
        </span>
      </div>

      
      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`w-full py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
          isAdded
            ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
            : 'bg-gray-900 text-white hover:bg-gray-800 active:scale-95'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechnologyCard;