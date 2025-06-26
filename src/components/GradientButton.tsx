import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
interface GradientButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  icon?: React.ReactNode;
}
const GradientButton = ({
  to,
  onClick,
  children,
  variant = 'primary',
  className = '',
  icon
}: GradientButtonProps) => {
  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]';
      case 'secondary':
        return 'bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]';
      case 'outline':
        return 'bg-transparent border-2 border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]';
      default:
        return 'bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]';
    }
  };
  const ButtonContent = () => <motion.span className="relative z-10 flex items-center justify-center" whileHover={{
    scale: 1.02
  }} whileTap={{
    scale: 0.98
  }}>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </motion.span>;
  if (to) {
    return <Link to={to} className={`relative px-6 py-3 rounded-md font-medium overflow-hidden transition-all duration-300 ${getButtonStyles()} ${className}`}>
        <ButtonContent />
      </Link>;
  }
  return <button onClick={onClick} className={`relative px-6 py-3 rounded-md font-medium overflow-hidden transition-all duration-300 ${getButtonStyles()} ${className}`}>
      <ButtonContent />
    </button>;
};
export default GradientButton;