import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';

function Layout() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="app-container">
            <header className='header'>
                <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center p-3">
                    <Link className="navbar-brand" to="/" ><img src="/imgs/glitch-bay-logo.png" alt="Logo" className="logo" /></Link>
                    <div className="d-none d-lg-flex gap-4">
                        <Link to="/products" className="text-black text-decoration-none">Our Products</Link>
                        <Link to="/aboutus" className="text-black text-decoration-none">About Us</Link>
                    </div>
                    <button className="navbar-toggler d-lg-none" onClick={() => setIsOpen(true)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </header>

            <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}></div>
            <nav className={`sidebar ${isOpen ? 'active' : ''}`}>
                <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
                <ul className="sidebar-nav">
                    <li><Link to="/products" onClick={() => setIsOpen(false)}>Our Products</Link></li>
                    <li><Link to="/aboutus" onClick={() => setIsOpen(false)}>About Us</Link></li>
                </ul>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;