import React, { useState } from 'react';
import type { Product } from '../types';

interface ProductCardProps {
    product: Product;
    isOutOfStock?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, isOutOfStock = false }) => {
    const [isFavorited, setIsFavorited] = useState(false);
    
    // For demo purposes, mark some products as "new"
    const isNew = product.id % 4 === 0;

    return (
        <article className="product-card">
            <div className="product-card__image-container">
                <img
                    src={product.image}
                    alt={`Image of ${product.title}`}
                    className="product-card__image"
                />
                {isOutOfStock && (
                     <div className="product-card__overlay">
                        <span>OUT OF STOCK</span>
                    </div>
                )}
            </div>
            <div className="product-card__info">
                <div>
                    <h3 className="product-card__title">
                        {/* The link is handled by the parent container now for better accessibility */}
                        {product.title.length > 25 ? product.title.substring(0, 22) + '...' : product.title}
                    </h3>
                    <p className="product-card__pricing-note">
                        Sign in or Create an account to see pricing
                    </p>
                </div>
                <button 
                    className={`product-card__favorite-btn ${isFavorited ? 'product-card__favorite-btn--favorited' : ''}`}
                    onClick={() => setIsFavorited(!isFavorited)}
                    aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={isFavorited ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
            </div>
             {isNew && !isOutOfStock && (
                <div className="product-card__tag">
                    NEW PRODUCT
                </div>
            )}
             <a href="#" className="product-card__link_overlay" aria-label={`View details for ${product.title}`}></a>
        </article>
    );
};

export const ProductCardSkeleton: React.FC = () => {
    return (
        <div className="product-card-skeleton">
            <div className="product-card-skeleton__image"></div>
            <div className="product-card-skeleton__text w-3-4"></div>
            <div className="product-card-skeleton__text w-1-2"></div>
        </div>
    );
};
