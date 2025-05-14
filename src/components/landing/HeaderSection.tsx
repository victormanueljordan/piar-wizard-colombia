
import Logo from '@/components/Logo';
import { Phone } from 'lucide-react';

const HeaderSection = () => {
  return (
    <header className="w-full bg-white shadow-sm py-3 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Logo className="h-10 w-auto" />
        <div className="flex items-center gap-3">
          <div className="bg-piar-blue/10 p-2 rounded-full animate-pulse">
            <Phone size={18} className="text-piar-blue"/>
          </div>
          <span className="text-sm md:text-base font-medium text-gray-700">+1 (215) 398 1983</span>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
