import React, { useState } from 'react';

interface SidebarProps {
    categories: string[];
    selectedCategories: string[];
    onCategoryChange: (category: string) => void;
    priceRange: number;
    onPriceChange: (price: number) => void;
    isOpen: boolean;
    onClose: () => void;
}

const FilterCheckbox: React.FC<{ label: string; checked: boolean; onChange: () => void; isCustomizable?: boolean }> = ({ label, checked, onChange, isCustomizable }) => (
    <label className={`filter-group__label ${isCustomizable ? 'filter-group__label--custom' : ''}`}>
        <input
            type="checkbox"
            className="filter-group__checkbox"
            checked={checked}
            onChange={onChange}
        />
        <span>{label}</span>
    </label>
);

const AccordionFilterGroup: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="filter-group filter-group--accordion">
            <button className="filter-group__header" onClick={() => setIsOpen(!isOpen)}>
                <h3 className="filter-group__title">{title}</h3>
                <svg className={`filter-group__arrow ${isOpen ? 'filter-group__arrow--open' : ''}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            {isOpen && (
                <div className="filter-group__content">
                    <button className="filter-group__unselect">Unselect all</button>
                    {children}
                </div>
            )}
        </div>
    );
};


export const Sidebar: React.FC<SidebarProps> = ({
    categories,
    selectedCategories,
    onCategoryChange,
    // priceRange, // Price range filter is not in the final design
    // onPriceChange,
    isOpen,
    onClose,
}) => {
    const mockFilterSections = [
        { title: 'IDEAL FOR', options: ["Men", "Women", "Baby & Kids"] },
        { title: 'OCCASION', options: ["Casual", "Formal", "Party", "Wedding"] },
        { title: 'WORK', options: ["Office", "Home Office", "Outdoor"] },
        { title: 'FABRIC', options: ["Cotton", "Linen", "Silk", "Denim"] },
        { title: 'SEGMENT', options: ["Ethnic", "Western", "Fusion"] },
        { title: 'SUITABLE FOR', options: ["Summer", "Winter", "All Seasons"] },
    ];

    return (
        <>
            {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
            <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
                <div className="sidebar__mobile-header">
                    <h2 className="sidebar__mobile-title">Filter</h2>
                    <button onClick={onClose} className="sidebar__close-btn">
                        <svg xmlns="http://www.w.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                <div className="sidebar__content">
                    <div className="filter-group">
                       <FilterCheckbox
                           label="CUSTOMIZABLE"
                           checked={false} // This is for display; not wired up
                           onChange={() => { }}
                           isCustomizable={true}
                       />
                    </div>
                    
                    {/* Real API categories are not part of the design's accordion view */}
                    {/* You can add them here if needed */}
                    
                    {mockFilterSections.map(section => (
                        <AccordionFilterGroup key={section.title} title={section.title}>
                             <div className="filter-group__options">
                                {section.options.map(option => (
                                    <FilterCheckbox
                                        key={option}
                                        label={option}
                                        checked={false} // These are for display; not wired up
                                        onChange={() => { }}
                                    />
                                ))}
                            </div>
                        </AccordionFilterGroup>
                    ))}
                </div>
            </aside>
        </>
    );
};
