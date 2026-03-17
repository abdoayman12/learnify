import { BookOpen } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const categores = [
  { label: "Web Development", href: "/web-development" },
  { label: "Data Science", href: "/data-science" },
  { label: "UI/UX Design", href: "/design" },
  { label: "Business", href: "/business" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Mobile Development", href: "/mobile-development" },
];
const company = [
  { label: "About Us", href: "/about" },
  { label: "Become an Instructor", href: "/instructors" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];
const support = [
  { label: "Help Center", href: "/help" },
  { label: "FAQ", href: "/faq" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Accessibility", href: "/accessibility" },
];
function Footer() {
  return (
    <footer className="bg-gray-50 w-full border-t border-[var(--color-border)] min-h-[450px] py-20 dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 justify-items-start md:justify-items-center lg:gap-x-0 lg:grid-cols-5 gap-y-9">
          {/* one row */}
          <div className="flex flex-col gap-4 w-auto items-start md:items-center">
            {/* Logo */}
            <Link to={"/"} className="flex gap-2 items-center">
              <div className="bg-primary-600 p-2 flex items-center justify-center rounded-xl text-white transition duration-300">
                <BookOpen />
              </div>
              <span className="text-text dark:text-text-inverted font-extrabold font-heading text-xl">
                Learnify
              </span>
            </Link>
            {/* text */}
            <p className="text-text-muted text-lg dark:text-gray-400 text-left md:text-center">
              Master new skills with world-class instructors. Access thousands
              of courses in technology, business, design, and more.{" "}
            </p>
            {/* links social from react-icons */}
            <div className="flex gap-4 items-center mt-2">
              <a className="social-link" href="#">
                <BsTwitterX />
              </a>
              <a className="social-link" href="#">
                <FaLinkedin />
              </a>
              <a className="social-link" href="#">
                <FaYoutube />
              </a>
              <a className="social-link" href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="hidden lg:block"></div>
          {/* categores row */}
          <div className="flex flex-col gap-3 w-fit">
            <h3 className="font-semibold">Categores</h3>
            {categores.map((items) => (
              <Link to={items.href} className="text-text-muted w-fit">
                {items.label}
              </Link>
            ))}
          </div>
          {/* company row */}
          <div className="flex flex-col gap-3 w-fit">
            <h3 className="font-semibold">Support</h3>
            {company.map((items) => (
              <Link to={items.href} className="text-text-muted w-fit">
                {items.label}
              </Link>
            ))}
          </div>
          {/* support row */}
          <div className="flex flex-col gap-3 w-fit">
            <h3 className="font-semibold">Company</h3>
            {support.map((items) => (
              <Link to={items.href} className="text-text-muted w-fit">
                {items.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
