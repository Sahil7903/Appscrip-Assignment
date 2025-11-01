import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <li>
        <a href={href} className="header__nav-link">
            {children}
        </a>
    </li>
);

const Icon: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <button className={`header__icon ${className || ''}`}>
        {children}
    </button>
);

const TopBarMessage: React.FC = () => (
    <div className="top-bar__message">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4A2 2 0 0 1 2 16.77V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2,8 12,13 22,8"></polyline><line x1="12" y1="22.76" x2="12" y2="13"></line></svg>
        <span>Lorem ipsum dolor</span>
    </div>
)

export const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <div className="top-bar">
            <div className="top-bar__container container">
                <TopBarMessage />
                <TopBarMessage />
                <TopBarMessage />
            </div>
        </div>
        <header className="app-header">
            <div className="main-header container">
                <div className="main-header__left">
                     <button className="header__mobile-toggle" onClick={() => setMenuOpen(!isMenuOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>
                     <div className="header__logo-icon">
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.514 17.319l-4.242 4.242 2.828 2.828 4.243-4.242-2.829-2.828zM30.342 17.319l-4.242 4.242 2.828 2.828 4.242-4.242-2.828-2.828zM23.928 21.56l-4.242 4.243 2.828 2.828 4.242-4.243-2.828-2.828zM17.514 30.147l-4.242 4.242 2.828 2.828 4.243-4.242-2.829-2.828zM30.342 30.147l-4.242 4.242 2.828 2.828 4.242-4.242-2.828-2.828z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M23.928 4.575l-7.07 7.071 7.071 7.07 7.07-7.07-7.07-7.07zm0 21.213l-7.07 7.071 7.071 7.07 7.07-7.07-7.07-7.07zM4.575 23.814l7.071-7.07 7.07 7.07-7.07 7.071-7.071-7.07zm21.213 0l7.071-7.07 7.07 7.07-7.07 7.071-7.071-7.07z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                     </div>
                </div>
                
                <div className="header__logo">
                    <a href="/">LOGO</a>
                </div>

                <div className="main-header__right">
                    <Icon className="header__icon--search"><svg xmlns="http://www.w.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></Icon>
                    <Icon><svg xmlns="http://www.w.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></Icon>
                    <Icon><svg xmlns="http://www.w.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></Icon>
                    <Icon className="header__icon--profile"><svg xmlns="http://www.w.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></Icon>
                    <button className="header__language-selector">
                        <span>ENG</span>
                        <svg xmlns="http://www.w.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>
                    </button>
                </div>
            </div>
            <nav className={`header-nav-container container ${isMenuOpen ? 'mobile-nav--open' : ''}`}>
                 <ul className="header__nav-list">
                    <NavLink href="#">Shop</NavLink>
                    <NavLink href="#">Skills</NavLink>
                    <NavLink href="#">Stories</NavLink>
                    <NavLink href="#">About</NavLink>
                    <NavLink href="#">Contact Us</NavLink>
                </ul>
            </nav>
        </header>
        </>
    );
};
