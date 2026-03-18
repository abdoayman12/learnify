import { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import {
  Search,
  Menu,
  X,
  Sun,
  Moon,
  BookOpen,
  GraduationCap,
  Users,
  DollarSign,
  Info,
} from "lucide-react";
import BookOpenIcon from "../ui/Icons/BookOpen";

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
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      e.key === "Escape" ? onClose() : "";
    });
    document.addEventListener("click", () => onClose());
  }, [onClose]);
  return (
    <div className="fixed flex inset-0 justify-center items-start z-[200] pt-20 px-4">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-[1000] bg-white dark:bg-surface-dark-muted rounded-2xl h-[151px] w-[672px] animate-fade-in-down"
      >
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
                onClick={() => {
                  navigate("/courses");
                  onClose();
                }}
                className="bg-surface-muted dark:bg-primary-900/20 text-text-muted px-3 py-2 rounded-lg text-xs md:text-sm transition-all cursor-pointer hover:text-primary-500 hover:bg-primary-50"
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
  let getLocalTheme = localStorage.getItem("dark");
  const [themeMode, setThemeMode] = useState(() =>
    getLocalTheme ? JSON.parse(getLocalTheme) : false,
  );
  const { pathname } = useLocation();
  useEffect(() => {
    setOpenMenu(false);
    setSearchOpen(false);
  }, [pathname]);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", themeMode);
    localStorage.setItem("dark", themeMode);
  }, [themeMode]);
  useEffect(() => {
    document.addEventListener("click", () => setOpenMenu(false));
  }, [openMenu]);
  return (
    <>
      <header
        className={`sticky top-0 ${openMenu ? "bg-surface-muted" : "bg-[var(--color-body)]"} border-b border-[var(--color-border)] h-[var(--navbar-height)] z-[100] backdrop-blur-md transition-all duration-300`}
      >
        <div className="container-custom h-full flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to={"/"} className="flex gap-2 items-center group">
            <BookOpenIcon HW={10} />
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
              onClick={(e) => {
                e.stopPropagation();
                setSearchOpen(true);
              }}
              className="items-center hidden sm:flex gap-2 py-2 px-3 bg text-sm bg-surface-muted dark:bg-surface-dark rounded-xl border border-[var(--color-border)] text-text-muted hover:text-primary-500 transition-colors"
            >
              <Search className="w-4 h-4" />
              <span className="hidden lg:inline">Search...</span>
            </button>
            {/* theme icon */}
            <button
              onClick={() => setThemeMode(!themeMode)}
              className="text-text-muted p-1.5 transition hover:bg-surface-muted dark:hover:bg-surface-dark rounded-xl hover:text-primary-500"
            >
              {themeMode ? <Sun /> : <Moon />}
            </button>
            {/* sign in btn */}
            <Link to={"/login"} className="btn-ghost text-sm hidden sm:block">
              Sign in
            </Link>
            {/* Get Started */}
            <Link
              to={"/signup"}
              className="btn-primary text-sm py-2 hidden sm:block"
            >
              Get Started
            </Link>
            {/* mune open */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenMenu(!openMenu);
              }}
              className="rounded-xl text-text-muted p-2 hover:bg-surface-muted hover:text-primary-500 transition-all lg:hidden"
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
      {/* mopile Nav links  */}
      {openMenu ? (
        <div className="fixed inset-0 z-[99] lg:hidden">
          {/* overlay */}
          <div className="absolute inset-0 bg-black/50" />
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-[var(--navbar-height)] bg-white dark:bg-surface-dark w-full flex flex-col gap-5 px-3 py-4 z-[1000] animate-slide-in"
          >
            {/* btn search */}
            <button
              onClick={() => {
                setSearchOpen(true);
                setOpenMenu(false);
              }}
              className="w-full flex items-center gap-3 p-3 text-sm text-text-muted bg-surface-muted dark:bg-surface-dark-muted border border-[var(--color-border)] rounded-xl"
            >
              <Search className="w-4 h-4" />
              Search For Courses
            </button>
            {/* nav links mopile */}
            <nav className="flex flex-col gap-2 py-5 border-t border-b border-[var(--color-border)]">
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className="nav-link-mobile"
                >
                  <item.icon />
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <Link to={"/login"} className="btn-outline text-sm">
              Sign in
            </Link>
            {/* Get Started */}
            <Link to={"/signup"} className="btn-primary text-sm">
              Get Started
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* search bar */}
      {searchOpen ? <SearchBar onClose={() => setSearchOpen(false)} /> : ""}
    </>
  );
}

export default Navbar;
