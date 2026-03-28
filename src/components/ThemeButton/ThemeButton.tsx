import { Button } from "antd";
import Image from 'next/image';

interface ThemeButtonProps {
  theme: 'light' | 'dark';
  text: string;
  onClick?: () => void;
  className?: string;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ 
  theme, 
  text, 
  onClick,
  className = ''
}) => {
  const buttonClasses = `h-auto w-fit px-6 py-2 rounded-3xl flex items-center gap-x-2 ${
    theme === 'dark' 
      ? '!bg-transparent border border-white text-white hover:!bg-white hover:!text-[#2A3B8F] hover:!border-[#2A3B8F]' 
      : 'border border-[#2A3B8F] text-[#2A3B8F] hover:!bg-[#2A3B8F] hover:!text-white hover:!border-white'
  } transition ${className}`;

  const arrowIcon = (
    <span className="inline-block ml-2 relative w-4 h-4">
      {/* 默认状态图标 */}
      <Image 
        src={theme === 'dark' ? "/icons/arrow-right-dark.svg" : "/icons/arrow-right-light.svg"} 
        alt="arrow-right"
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
          theme === 'dark' 
            ? 'opacity-100 group-hover:opacity-0' 
            : 'opacity-100 group-hover:opacity-0'
        }`}
        width={16}
        height={16}
      />
      {/* hover状态图标 */}
      <Image 
        src={theme === 'dark' ? "/icons/arrow-right-light.svg" : "/icons/arrow-right-dark.svg"} 
        alt="arrow-right-hover"
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
          theme === 'dark' 
            ? 'opacity-0 group-hover:opacity-100' 
            : 'opacity-0 group-hover:opacity-100'
        }`}
        width={16}
        height={16}
      />
    </span>
  );

  return (
    <button 
      className={`${buttonClasses} group`}
      onClick={onClick}
    >
      <span>{text}</span>
      {arrowIcon}
    </button>
  );
};

export default ThemeButton;