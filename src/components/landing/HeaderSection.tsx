
import Logo from '@/components/Logo';
import { MessageSquare } from 'lucide-react';

const HeaderSection = () => {
  return (
    <header className="w-full bg-white shadow-sm py-3 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Logo className="h-10 w-auto" />
        <a 
          href="https://wa.me/573186229344" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-green-600 transition-colors duration-300"
        >
          <div className="bg-green-500 p-2 rounded-full animate-pulse">
            <MessageSquare size={18} className="text-white"/>
          </div>
          <span className="text-sm md:text-base font-medium text-gray-700">+57 318 622 9344</span>
        </a>
      </div>
    </header>
  );
};

export default HeaderSection;
