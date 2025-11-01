import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import type { Product } from './types';
import { fetchProducts, fetchCategories } from './services/api';
import './App.css';

const App: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<number>(1000);
    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [isFilterVisible, setFilterVisible] = useState<boolean>(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            const isDesktop = window.innerWidth >= 1024;
            setFilterVisible(isDesktop);
            if (isDesktop) {
                setSidebarOpen(false); // Close mobile sidebar on desktop
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const [productsData, categoriesData] = await Promise.all([
                    fetchProducts(),
                    fetchCategories(),
                ]);
                setProducts(productsData);
                setFilteredProducts(productsData);
                setCategories(categoriesData);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const applyFilters = useCallback(() => {
        let tempProducts = [...products];

        if (selectedCategories.length > 0) {
            tempProducts = tempProducts.filter(product =>
                selectedCategories.includes(product.category)
            );
        }

        tempProducts = tempProducts.filter(product => product.price <= priceRange);

        setFilteredProducts(tempProducts);
    }, [products, selectedCategories, priceRange]);

    useEffect(() => {
        applyFilters();
    }, [applyFilters]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const handlePriceChange = (newPrice: number) => {
        setPriceRange(newPrice);
    };

    const toggleSidebar = () => {
        if (window.innerWidth < 1024) {
            setSidebarOpen(!isSidebarOpen);
        } else {
            setFilterVisible(!isFilterVisible);
        }
    };

    return (
        <div className="app-container">
            <Header />
            <main className="main-content container">
                <div className="page-banner">
                    <div className="page-banner__breadcrumb-wrapper">
                        <span className="page-banner__breadcrumb">HOME</span> 
                        <span className="page-banner__breadcrumb-separator">&gt;</span> 
                        <span className="page-banner__breadcrumb">SHOP</span>
                    </div>
                    <h1 className="page-banner__title">DISCOVER OUR PRODUCTS</h1>
                    <p className="page-banner__description">
                        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
                    </p>
                </div>
                <div className="content-wrapper">
                    <div className={`sidebar-container ${isFilterVisible ? 'sidebar-container--visible' : ''}`}>
                        <Sidebar
                            categories={categories}
                            selectedCategories={selectedCategories}
                            onCategoryChange={handleCategoryChange}
                            priceRange={priceRange}
                            onPriceChange={handlePriceChange}
                            isOpen={isSidebarOpen}
                            onClose={() => setSidebarOpen(false)}
                        />
                    </div>
                    <div className="product-grid-container">
                        <ProductGrid
                            products={filteredProducts}
                            onToggleSidebar={toggleSidebar}
                            loading={loading}
                            isFilterVisible={isFilterVisible}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
