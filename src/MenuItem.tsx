// Import React since it's used in JSX transformation
import React from 'react';
import { Plus, History, CircleHelp, Settings, Info, LucideIcon } from 'lucide-react';
const MenuItem = ({ 
    Icon, 
    label, 
    isExpanded = true,
} : {
    Icon: LucideIcon,
    label: string,
    isExpanded: boolean
}) => {
    return (
        <div
            className={`flex h-11 cursor-pointer items-center justify-start gap-2 px-[0.875rem] text-sm hover:bg-[#161616] hover:border hover:border-brand-yellow1 ${
                isExpanded ? 'w-full' : 'w-11'
            }`}
        >
            <Icon className="min-w-4 text-brand-yellow1" size={16} />
            <p className="line-clamp-1 text-brand-yellow1">{label}</p>
        </div>
    );
};
export default MenuItem;
