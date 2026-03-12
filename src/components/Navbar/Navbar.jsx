import { useState, useEffect, useRef } from "react";
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
  { label: "Courses",     href: "/courses",     icon: BookOpen },
  { label: "Categories",  href: "/categories",  icon: GraduationCap },
  { label: "Instructors", href: "/instructors", icon: Users },
  { label: "Pricing",     href: "/#pricing",    icon: DollarSign },
  { label: "About",       href: "/about",       icon: Info },
];
function Navbar() {
  return (
    <div className="">
      
    </div>
  )
}

export default Navbar
