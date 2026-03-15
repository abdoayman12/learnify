import { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
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
function SearchBar({ onClose }) {
  const popular = ["Python", "React", "Machine Learning", "Design"];
  const navigate = useNavigate();
  return (
    <div className="fixed flex inset-0 justify-center items-start z-[200] pt-20 px-4">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-[1000] bg-white dark:bg-surface-dark-muted rounded-2xl h-[151px] w-[672px] animate-fade-in-down">
        {/* input */}
        <div className="flex gap-4 items-center px-5 py-4 border-b border-[var(--color-border)] text-text-muted overflow-hidden">
          <Search className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search for courses, topics, instructors..."
            className="outline-none w-full text-text text-base dark:text-text-inverted bg-transparent"
          />
          <button onClick={onClose}>
            <X className="w-5 h-5 transition-all hover:text-black dark:hover:text-white" />
          </button>
        </div>
        {/* popular */}
        <div className="px-5 py-4">
          <p className="text-text-muted uppercase text-xs font-semibold tracking-widest mb-3">
            Popular Searches
          </p>
          <div className="flex gap-3 items-center">
            {popular.map((item) => (
              <span
                key={item}
                onClick={() => navigate("/courses")}
                className="bg-surface-muted dark:bg-surface-dark text-text-muted px-3 py-2 rounded-lg text-sm transition-all cursor-pointer hover:text-primary-500 hover:bg-primary-50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <header className="sticky top-0 bg-white/90 h-[var(--navbar-height)] z-[100] dark:bg-surface-dark/90 backdrop:blur-md">
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
              <NavLink key={item.href} to={item.href} className="nav-link">
                {item.label}
              </NavLink>
            ))}
          </nav>
          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* btn search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 py-2 px-3 bg text-sm bg-surface-muted dark:bg-surface-dark rounded-xl border border-[var(--color-border)] text-text-muted hover:text-primary-500 transition-colors"
            >
              <Search className="w-4 h-4" />
              <span className="hidden lg:inline">Search...</span>
            </button>
            {/* theme icon */}
            <button className="text-text-muted p-1 transition hover:bg-surface-muted dark:hover:bg-surface-dark-muted rounded-lg hover:text-primary-500">
              <Moon />
            </button>
            {/* sign in btn */}
            <Link to={"/login"} className="btn-ghost text-sm">
              Sign in
            </Link>
            {/* Get Started */}
            <Link to={"/signup"} className="btn-primary text-sm py-2">
              Get Started
            </Link>
            {/* mune open */}
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="rounded-xl text-text-muted p-2 hover:bg-surface-muted hover:text-primary-500 dark:bg-white transition-all"
            >
              {openMenu ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>
      {/* search bar */}
      {searchOpen ? <SearchBar onClose={() => setSearchOpen(false)} /> : ""}
    </>
  );
}

export default Navbar;
