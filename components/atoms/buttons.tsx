import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'outline' | 'nav';
}

export const Button = ({ children, variant = 'primary', className = "", ...props }: ButtonProps) => {
    const baseStyle = "font-label-md uppercase tracking-widest transition-all";

    const variants = {
        primary: "bg-primary text-on-primary px-8 py-4 rounded-xl hover:shadow-xl",
        outline: "border border-outline-variant text-primary px-8 py-4 rounded-xl hover:bg-surface-container",
        nav: "bg-primary text-on-primary px-6 py-2.5 rounded-lg hover:opacity-90 active:scale-[0.99]"
    };

    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};