import { IoClose } from 'react-icons/io5';
import type { Technology } from '../types/technology';

interface YourStackProps {
  selectedTechs: Technology[];
  onRemoveTech: (id: string) => void;
  onClearAll: () => void;
}

const YourStack = ({ selectedTechs, onRemoveTech, onClearAll }: YourStackProps) => {
  return (
    <div className='bg-white rounded-xl border border-gray-200 p-5 sticky top-24'>

      <h3 className='text-lg font-bold text-gray-900'>Your Stack</h3>
      <p className='text-sm text-gray-500 mb-4'>
        {selectedTechs.length} Technology Selected
      </p>

      {selectedTechs.length === 0 ? (
        <div className='text-center py-8'>
          <p className='text-gray-500 text-sm mb-1'>No technologies selected yet</p>
          <p className='text-gray-400 text-xs'>
            Add technologies from the grid to build your stack
          </p>
        </div>
      ) : (
        <>
          <div className='space-y-3 mb-4 max-h-80 overflow-y-auto'>
            {selectedTechs.map((tech) => (
              <div
                key={tech.id}
                className='flex items-center justify-between border border-gray-200 rounded-lg p-3'
              >
                <div className='flex items-center gap-3'>
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className='w-7 h-7 object-contain'
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://placehold.co/28x28?text=Icon';
                    }}
                  />
                  <div>
                    <h4 className='font-semibold text-gray-900 text-sm'>{tech.name}</h4>
                    <p className='text-xs text-gray-500'>{tech.category}</p>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveTech(tech.id)}
                  className='text-gray-400 hover:text-red-500 transition-all duration-300'
                  title='Remove'
                >
                  <IoClose size={20} />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onClearAll}
            className='w-full py-2.5 px-4 border border-gray-200 text-red-600 text-sm font-semibold rounded-lg hover:bg-red-50 transition-all duration-300'
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;