import { ReactNode } from 'react';
import './styles.scss';

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const Button = ({ onClick, children, className = '' }: ButtonProps) => {
  return (
    <button className={`styled-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
