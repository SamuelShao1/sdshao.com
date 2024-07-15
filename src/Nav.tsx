import React, { useEffect, useState } from 'react';
import { Menu, Plus, CircleHelp, Settings, Info } from 'lucide-react';
import MenuItem from './MenuItem';
const Nav = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [status, setStatus] = useState('');
    const [credits, setCredits] = useState(0);
    const toggleSidebarExpand = () => {
        setIsExpanded(prev => !prev);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5001/minkout-31186/us-central1/get_status_and_credits');
                const data = await response.json();
                setStatus(data.status);
                setCredits(data.credits);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className={`hidden w-screen flex justify-between bg-brand-dark2 px-4 py-6 duration-500 sm:inline-flex ${isExpanded ? 'h-[20vh]' : 'h-[3.75rem]'}`}>
            <div className="flex">
                <button onClick={toggleSidebarExpand} className="grid place-items-center justify-center rounded-full p-3 text-brand-purple_accent1">
                    <Menu size={14} />
                </button>
                <div className="flex text-brand-purple_accent1">
                    {[{ label: 'Help', icon: CircleHelp }, { label: 'Settings', icon: Settings }, { label: 'About', icon: Info }].map(
                        ({ label, icon }, idx) => <MenuItem key={idx} Icon={icon} label={label} isExpanded={isExpanded} />
                    )}
                </div>
                {isExpanded && (
                    <div>
                        <div className="animate-fade-in flex flex-col">
                            <div className="text-brand-purple_accent1 border-l border-brand-purple_accent1 mt-1" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Nav;
