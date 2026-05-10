import { Icon } from '../atoms/icons';

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    link?: string;
}

export const ServiceCard = ({ icon, title, description, link = "#" }: ServiceCardProps) => (
    <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-xl hover:shadow-lg transition-all flex flex-col items-start gap-6 group">
        <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center rounded-lg">
            <Icon name={icon} />
        </div>
        <div className="space-y-4 flex-1">
            <h3 className="font-headline-md text-2xl text-primary font-semibold">{title}</h3>
            <p className="text-secondary text-base leading-relaxed">{description}</p>
        </div>
        <a href={link} className="inline-flex items-center gap-2 text-primary font-label-md uppercase tracking-widest border-b border-transparent group-hover:border-primary transition-all">
            Learn More <Icon name="arrow_forward" className="text-sm" />
        </a>
    </div>
);