import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
    Search,
    Menu,
    X,
    Sun,
    Moon,
    ChevronDown,
    BookOpen,
    GraduationCap,
    Users,
    DollarSign,
    Info,
} from "lucide-react";
const NAV_LINKS = [
    { label: "Courses", href: "/courses", icon: BookOpen },
    { label: "Categories", href: "/categories", icon: GraduationCap },
    { label: "Instructors", href: "/instructors", icon: Users },
    { label: "Pricing", href: "/#pricing", icon: DollarSign },
    { label: "About", href: "/about", icon: Info },
];
function Navbar() {
    return (
        <>
            <header className="fixed bg-white/90 left-0 right-0 h-[var(--navbar-height)] z-[100] dark:bg-surface-dark/90">
                <div className="container-custom h-full flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link to={"/"} className="flex gap-2 items-center group">
                        <div className="bg-primary-600 p-2 flex items-center justify-center rounded-xl text-white group-hover:scale-105 transition duration-300">
                            <BookOpen />
                        </div>
                        <span className="text-text dark:text-text-inverted font-extrabold font-heading text-xl">
                            Learnify
                        </span>
                    </Link>
                    {/* desktop Nav links  */}
                    <nav className="hidden lg:flex gap-6 items-center">
                        {NAV_LINKS.map((item) => (
                            <NavLink
                                key={item.href}
                                to={item.href}
                                className="nav-link"
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                    {/* Right actions */}
                    <div className="flex items-center gap-3">
                        {/* btn search */}
                        <button className="flex items-center gap-2 py-2 px-3 bg text-sm bg-surface-muted dark:bg-surface-dark rounded-xl border border-[var(--color-border)] text-text-muted hover:text-primary-500 transition-colors">
                            <Search className="w-4 h-4" />
                            <span>Search...</span>
                        </button>
                        {/* theme icon */}
                        <button className="text-text-muted p-1 transition hover:bg-surface-muted dark:hover:bg-surface-dark-muted rounded-lg hover:text-primary-500">
                          <Moon />
                        </button>
                        {/* sign in btn */}
                        <Link to={'/login'} className="btn-ghost text-sm">
                          Sign in
                        </Link>
                        {/* Get Started */}
                        <Link to={'/signup'} className="btn-primary text-sm py-2">
                          Get Started
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
