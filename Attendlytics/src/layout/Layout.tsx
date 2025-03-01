// src/layout/Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom"; // Outlet is used for nested routing
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

const Layout: React.FC = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    {/* The Outlet renders the matched child route */}
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
