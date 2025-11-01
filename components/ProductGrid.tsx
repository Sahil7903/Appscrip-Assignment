import React, { useState, useRef, useEffect } from 'react';
import type { Product } from '../types';
import { ProductCard, ProductCardSkeleton } from './ProductCard';

interface ProductGridProps {
    products: Product[];
    onToggleSidebar: () => void;
    loading: boolean;
    isFilterVisible: boolean;
}

const SortDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('RECOMMENDED');
    const options = ['RECOMMENDED', 'NEWEST FIRST', 'POPULAR', 'PRICE: HIGH TO LOW', 'PRICE: LOW TO HIGH'];
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    }

    return (
        <div className="custom-sort" ref={dropdownRef}>
            <button className="custom-sort__trigger" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption}
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
            {isOpen && (
                <ul className="custom-sort__options">
                    {options.map(option => (
                        <li 
                            key={option} 
                            className={`custom-sort__option ${selectedOption === option ? 'custom-sort__option--selected' : ''}`}
                            onClick={() => handleSelect(option)}
                        >
                            {selectedOption === option && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg>
                            )}
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onToggleSidebar, loading, isFilterVisible }) => {
    return (
        <section>
            <div className="grid-header">
                <div className="grid-header__left">
                    <span className="item-count">{loading ? '...' : products.length} ITEMS</span>
                    <button onClick={onToggleSidebar} className="grid-header__filter-toggle">
                        {isFilterVisible ? (
                           <>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            <span>HIDE FILTER</span>
                           </>
                        ) : (
                            <>
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                             <span>SHOW FILTER</span>
                            </>
                        )}
                    </button>
                </div>
                <div className="grid-header__right">
                    <SortDropdown />
                </div>
            </div>

            <div className="product-grid">
                {loading ? (
                    Array.from({ length: 9 }).map((_, index) => <ProductCardSkeleton key={index} />)
                ) : products.length > 0 ? (
                    products.map((product, index) => <ProductCard key={product.id} product={product} isOutOfStock={index === 4} />)
                ) : (
                    <div className="no-products-message">
                        <h2>No products found</h2>
                        <p>Try adjusting your filters.</p>
                    </div>
                )}
            </div>
        </section>
    );
};
