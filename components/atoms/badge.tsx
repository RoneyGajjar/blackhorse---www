import { ReactNode } from 'react';

interface BadgeProps {
    children: ReactNode;
}

export const Badge = ({ children }: BadgeProps) => (
    <span className="inline-block px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary font-label-md uppercase tracking-widest rounded-full">
        {children}
    </span>
);