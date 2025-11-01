import React from 'react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <li>
        <a href={href}>{children}</a>
    </li>
);

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="footer-socials__link">
        {children}
    </a>
);

const PaymentIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="footer-payment__icon">
        {children}
    </div>
);


export const Footer: React.FC = () => {
    return (
        <footer className="app-footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-column footer-column--subscribe">
                        <h3 className="footer-column__title">Be the first to know</h3>
                        <p className="footer-column__text">Sign up for updates from mettā muse.</p>
                        <form className="subscribe-form">
                            <input
                                type="email"
                                placeholder="Enter your e-mail..."
                                className="subscribe-form__input"
                            />
                            <button
                                type="submit"
                                className="subscribe-form__button"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    <div className="footer-column footer-column--contact">
                        <h3 className="footer-column__title">Contact Us</h3>
                        <ul className="footer-list">
                            <li><p>+44 221 133 5360</p></li>
                            <li><p>customercare@mettamuse.com</p></li>
                        </ul>
                        <h3 className="footer-column__title footer-column__title--currency">Currency</h3>
                         <div className="currency-selector">
                            <span className="currency-selector__flag">🇺🇸</span>
                            <span className="currency-selector__separator">•</span>
                            <span className="currency-selector__code">USD</span>
                        </div>
                        <p className="currency-note">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>

                <div className="footer-main">
                     <div className="footer-column">
                         <h3 className="footer-column__title">mettā muse</h3>
                        <ul className="footer-list">
                            <FooterLink href="#">About Us</FooterLink>
                            <FooterLink href="#">Stories</FooterLink>
                            <FooterLink href="#">Artisans</FooterLink>
                            <FooterLink href="#">Boutiques</FooterLink>
                            <FooterLink href="#">Contact Us</FooterLink>
                            <FooterLink href="#">EU Compliances Docs</FooterLink>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-column__title">Quick Links</h3>
                        <ul className="footer-list">
                            <FooterLink href="#">Orders & Shipping</FooterLink>
                            <FooterLink href="#">Join/Login as a Seller</FooterLink>
                            <FooterLink href="#">Payment & Pricing</FooterLink>
                            <FooterLink href="#">Return & Refunds</FooterLink>
                            <FooterLink href="#">FAQs</FooterLink>
                            <FooterLink href="#">Privacy Policy</FooterLink>
                            <FooterLink href="#">Terms & Conditions</FooterLink>
                        </ul>
                    </div>
                     <div className="footer-column">
                        <div className="footer-socials">
                            <h3 className="footer-column__title">Follow Us</h3>
                            <div className="footer-socials__icons">
                                <SocialIcon href="#">
                                    <svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="white" strokeWidth="1.5" stroke-miterlimit="10"/><path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="white" strokeWidth="1.5" stroke-miterlimit="10"/><path d="M16.5 7.5V7.501" stroke="white" strokeWidth="1.5" stroke-linecap="round"/></svg>
                                </SocialIcon>
                                <SocialIcon href="#">
                                   <svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="11" stroke="white" stroke-width="1.5"/>
                                        <path d="M9.5 15V9H11.5V10.5C12 9.5 13 9 14 9C16 9 16.5 10.5 16.5 12V15H14.5V12.5C14.5 11.5 14 11 13 11C12 11 11.5 11.5 11.5 12.5V15H9.5Z" fill="white"/>
                                        <circle cx="8" cy="12" r="1" fill="white"/>
                                    </svg>
                                </SocialIcon>
                            </div>
                        </div>
                        <div className="footer-payment">
                            <h3 className="footer-column__title">mettā muse ACCEPTS</h3>
                            <div className="footer-payment__icons">
                               <PaymentIcon><svg width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.228 5.75H1.472C0.68 5.75 0 6.273 0 6.87v16.258c0 0.598 0.68 1.121 1.472 1.121H47.228c0.791 0 1.472-0.523 1.472-1.121V6.87C48.7 6.273 48.02 5.75 47.228 5.75Z" fill="#fff"></path><path d="M10.91 10.33v9.338h2.383v-9.338H10.91ZM20.627 10.33l-2.611 6.304-2.585-6.304h-2.532l3.868 9.338h2.664l3.867-9.338h-2.671ZM28.691 10.33l-1.928 9.338h2.253l0.36-1.79h2.226l0.198 1.79h2.356L32.25 10.33h-3.56Zm1.543 6.095l0.589-2.885 0.589 2.885h-1.178ZM38.219 12.333c0-0.742-0.413-1.056-1.152-1.056-0.632 0-1.125 0.314-1.125 0.873 0 0.631 0.52 0.899 1.259 1.151l1.417 0.49c1.336 0.464 1.954 1.177 1.954 2.33 0 1.63-1.258 2.515-3.21 2.515-1.77 0-3.05-0.743-3.05-2.023 0-0.795 0.52-1.177 1.258-1.177 0.686 0 1.152 0.34 1.152 0.925 0 0.743-0.609 1.056-1.417 1.308l-1.336 0.41c-1.125 0.34-1.637 0.925-1.637 1.897 0 1.471 1.071 2.9 3.674 2.9 2.227 0 3.868-1.082 3.868-3.033 0-2.022-1.389-2.646-3.05-3.189l-0.893-0.287c-0.306-0.106-0.493-0.208-0.493-0.438 0-0.287 0.226-0.464 0.573-0.464 0.52 0 0.738 0.234 0.738 0.657v0.106h2.12Z" fill="#000"></path></svg></PaymentIcon>
                                <PaymentIcon><svg width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M47.228 5.75H1.472C0.68 5.75 0 6.273 0 6.87v16.258c0 0.598 0.68 1.121 1.472 1.121H47.228c0.791 0 1.472-0.523 1.472-1.121V6.87C48.7 6.273 48.02 5.75 47.228 5.75Z" fill="#fff"></path><path d="M18.17 15c0-2.83 1.693-4.8 4.314-4.8 1.667 0 2.871 0.743 3.542 1.309l-1.232 1.23c-0.52-0.464-1.233-0.925-2.257-0.925-1.587 0-2.611 1.203-2.611 2.955 0 1.826 1.049 2.981 2.611 2.981 1.023 0 1.737-0.463 2.257-0.925l1.232 1.23c-0.671 0.565-1.875 1.308-3.542 1.308-2.621 0-4.314-1.944-4.314-4.75ZM31.14 10.2h-2.12v9.6h2.12v-9.6Z" fill="#F79E1B"></path><path d="M15.362 15c0 2.593 1.954 4.8 4.675 4.8 2.72 0 4.675-2.207 4.675-4.8S22.757 10.2 20.037 10.2c-2.721 0-4.675 2.207-4.675 4.8Z" fill="#EB001B"></path><path d="M30.413 15c0-2.593-1.954-4.8-4.675-4.8-1.072 0-2.08 0.34-2.924 0.925 1.514 0.819 2.531 2.416 2.531 4.291 0 1.875-1.017 3.472-2.53 4.292 0.844 0.585 1.852 0.925 2.923 0.925 2.721 0 4.675-2.207 4.675-4.8Z" fill="#00A1DF"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h48.7v30H0z"></path></clipPath></defs></svg></PaymentIcon>
                                <PaymentIcon><svg width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.228 5.75H1.472C0.68 5.75 0 6.273 0 6.87v16.258c0 0.598 0.68 1.121 1.472 1.121H47.228c0.791 0 1.472-0.523 1.472-1.121V6.87C48.7 6.273 48.02 5.75 47.228 5.75Z" fill="#fff"></path><path d="M22.094 15.65c0.078-2.438-1.782-3.813-4.39-3.813h-4.36v9.6h4.516c2.922 0 4.312-1.484 4.234-3.531v-2.25Zm-6.516-2.187h2.125c1.172 0 1.844 0.547 1.766 1.75-0.079 1.297-0.782 1.766-1.766 1.766h-2.125v-3.516Z" fill="#253B80"></path><path d="M24.844 19.984h2.328l1.438-3.078c0.266-0.563 0.469-1.016 0.516-1.125 0.047-0.11 0.078-0.219 0.078-0.313 0 0.453-0.282 1.344-0.453 1.844l-0.75 2.671h2.203l3.203-9.6h-2.328l-1.375 4.78c-0.11 0.407-0.203 0.813-0.297 1.25-0.094-0.5-0.187-0.906-0.281-1.312l-1.391-4.718h-2.265l-3.219 9.6Z" fill="#1175C5"></path><path d="M37.312 11.828c-0.234-0.125-0.531-0.219-0.89-0.219-0.828 0-1.422 0.5-1.422 1.219 0 0.484 0.281 0.797 0.719 0.984l0.437 0.188c0.765 0.328 1.078 0.594 1.078 1.094 0 0.843-0.812 1.28-1.843 1.28-1.25 0-1.875-0.39-2.14-0.594l-0.344 2.03c0.297 0.156 0.766 0.281 1.297 0.281 1.953 0 3.203-1.031 3.203-2.64 0-1.5-1.015-2.282-2.5-2.922l-0.516-0.219c-0.422-0.187-0.672-0.375-0.672-0.672 0-0.312 0.266-0.578 0.734-0.578 0.657 0 0.922 0.234 1.016 0.313l0.297-1.812Z" fill="#1175C5"></path></svg></PaymentIcon>
                                <PaymentIcon><svg width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.228 5.75H1.472C0.68 5.75 0 6.273 0 6.87v16.258c0 0.598 0.68 1.121 1.472 1.121H47.228c0.791 0 1.472-0.523 1.472-1.121V6.87C48.7 6.273 48.02 5.75 47.228 5.75Z" fill="#fff"></path><path d="M11.96 17.01v-0.026l4.13-9.585h2.935l-5.636 12.39h-2.488l-5.637-12.39H7.81l4.15 9.606v-0.026Z" fill="#1A1A1A"></path><path d="M25.132 17.166h-2.173l-0.74-1.897h-3.41v1.897h-2.147V7.424h5.61c2.82 0 4.416 1.308 4.416 3.774 0 1.63-0.765 2.725-2.003 3.32l2.356 2.648h-2.532l-1.977-2.186h-1.587l0.74 2.186Zm-3.463-3.214h1.284c1.233 0 1.954-0.513 1.954-1.63 0-1.082-0.72-1.604-1.954-1.604h-1.284v3.234Z" fill="#1A1A1A"></path><path d="M38.704 7.424v9.742h-2.147v-8.08l-3.263 8.08h-1.693l-3.263-8.08v8.08H26.22v-9.742h2.899l2.488 6.435 2.488-6.435h2.61Z" fill="#1A1A1A"></path></svg></PaymentIcon>
                                <PaymentIcon><svg width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.228 5.75H1.472C0.68 5.75 0 6.273 0 6.87v16.258c0 0.598 0.68 1.121 1.472 1.121H47.228c0.791 0 1.472-0.523 1.472-1.121V6.87C48.7 6.273 48.02 5.75 47.228 5.75Z" fill="#fff"></path><path d="M22.062 13.924c-0.893-0.873-1.442-1.524-2.12-2.383-0.493-0.605-0.71-1.028-0.71-1.446 0-0.769 0.603-1.336 1.637-1.336 0.946 0 1.612 0.539 2.174 1.258l1.417-1.576c-0.84-1.056-2.027-1.745-3.647-1.745-1.928 0-3.484 1.177-3.484 2.981 0 1.284 0.66 2.224 1.586 3.267 0.632 0.743 1.232 1.446 1.875 2.224 0.791 0.925 0.972 1.336 0.972 1.771 0 0.925-0.84 1.576-2.028 1.576-1.336 0-2.201-0.631-2.923-1.524l-1.536 1.446c1.097 1.309 2.611 2.023 4.502 2.023 2.146 0 3.974-1.283 3.974-3.345 0-1.124-0.546-2.075-1.637-3.214Z" fill="#000"></path><path d="M33.642 16.32c0.387 0 0.603-0.234 0.603-0.565 0-0.34-0.216-0.565-0.603-0.565h-2.146v1.13h2.146Zm-3.136 3.518h2.383c0.71 0 1.125-0.183 1.417-0.951l1.098-2.927h0.026c-0.254 1.151-0.413 2.049-0.466 2.493l-0.306 1.385h2.001l0.765-3.649c0.053-0.234 0.08-0.411 0.08-0.539 0-0.59-0.387-0.951-1.125-0.951h-2.382c-0.71 0-1.125 0.183-1.417 0.951l-1.098 2.927h-0.026c0.254-1.151 0.413-2.049 0.466-2.493l0.306-1.385h-2.001l-0.765 3.649c-0.053 0.234-0.08 0.411-0.08 0.539 0 0.59 0.386 0.951 1.125 0.951Z" fill="#000"></path></svg></PaymentIcon>
                                <PaymentIcon><svg width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#000"><path d="M47.228 5.75H1.472C0.68 5.75 0 6.273 0 6.87v16.258c0 0.598 0.68 1.121 1.472 1.121H47.228c0.791 0 1.472-0.523 1.472-1.121V6.87C48.7 6.273 48.02 5.75 47.228 5.75Z" fill="#fff"></path><path d="M21.136 12.015c-0.053-1.283-0.546-2.383-1.875-2.383-1.56 0-2.488 1.309-2.488 2.85 0 2.276 1.744 2.876 3.05 3.372l0.685 0.26c0.817 0.314 1.072 0.605 1.072 1.056 0 0.742-0.71 1.15-1.587 1.15-1.124 0-1.637-0.366-1.928-0.539l-0.546 1.771c0.439 0.234 1.259 0.438 2.506 0.438 2.028 0 3.34-1.177 3.367-2.927 0-1.97-1.363-2.698-2.898-3.267l-0.574-0.208c-0.946-0.34-1.284-0.657-1.284-1.082 0-0.366 0.334-0.683 1.02-0.683 0.791 0 1.125 0.287 1.336 0.411l0.466-1.658Z"></path><path d="M32.897 10.024c-0.603 0-1.045 0.366-1.284 0.9h-0.027l-0.026-0.819h-2.028v9.742h2.201v-4.99c0-1.446 0.71-2.357 1.875-2.357 1.045 0 1.586 0.742 1.586 2.515v4.832h2.202v-5.35c0-2.41-1.47-3.9-3.5-3.9Z"></path><path d="M38.854 12.093c0.027-0.491-0.226-0.743-0.738-0.743-0.546 0-0.84 0.287-0.84 0.743v7.746h-2.201v-7.852c0-1.576 1.071-2.435 2.531-2.435 0.84 0 1.442 0.314 1.822 0.873h0.026V7.632h2.028v12.206h-2.201v-7.745Z"></path><path d="M12.28 7.632v1.997h-2.201V7.632H7.878v12.206h2.201v-5.91c0-1.848 1.152-2.725 2.505-2.725h0.493v8.635h2.201V7.632h-2.998Z"></path></g></svg></PaymentIcon>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-bottom__copyright">Copyright © 2023 mettamuse. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};