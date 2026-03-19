import { BsTwitterX } from "react-icons/bs";
import { FaGooglePlay, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiApple } from "react-icons/si";
import { Link } from "react-router-dom";
import BookOpenIcon from "../ui/Icons/BookOpen";

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
    <footer className="bg-gray-50 w-full border-t border-[var(--color-border)] min-h-[450px] dark:bg-gray-900">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-16 md:justify-items-center lg:grid-cols-12 lg:items-start lg:justify-items-start lg:gap-x-8 xl:gap-x-12">
          <div className="flex flex-col gap-4 items-start md:items-center lg:items-start lg:col-span-5 xl:pr-10">
            <Link to="/" className="flex gap-2 items-center">
              <BookOpenIcon HW={10} />
              <span className="text-text dark:text-text-inverted font-extrabold font-heading text-xl">
                Learnify
              </span>
            </Link>

            <p className="text-text-muted text-[18px] w-full max-w-[26rem] dark:text-gray-400 text-left md:text-center lg:text-left">
              Master new skills with world-class instructors. Access thousands of
              courses in technology, business, design, and more.
            </p>

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

          <div className="flex flex-col gap-3 w-fit lg:col-span-2">
            <h3 className="font-semibold">Categores</h3>
            {categores.map((items) => (
              <Link
                key={items.href}
                to={items.href}
                className="text-text-muted w-fit dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-all"
              >
                {items.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 w-fit lg:col-span-2">
            <h3 className="font-semibold">Support</h3>
            {company.map((items) => (
              <Link
                key={items.href}
                to={items.href}
                className="text-text-muted w-fit dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-all"
              >
                {items.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 w-fit lg:col-span-3">
            <h3 className="font-semibold">Company</h3>
            {support.map((items) => (
              <Link
                key={items.href}
                to={items.href}
                className="text-text-muted w-fit dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-all"
              >
                {items.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-200 dark:border-gray-800">
        <div className="container-custom flex flex-col gap-4 py-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-text-muted dark:text-gray-400 text-sm md:text-[16px]">
            © 2026 Learnify. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
            <span className="text-gray-500 dark:text-gray-400 text-sm">Available on:</span>
            <a
              href="#"
              className="bg-gray-900 text-white py-1 px-3 flex items-center justify-center gap-2 rounded-md text-sm dark:bg-surface-dark-muted"
            >
              <SiApple />
              IOS
            </a>
            <a
              href="#"
              className="bg-gray-900 text-white py-1 px-3 flex items-center justify-center gap-2 rounded-md text-sm dark:bg-surface-dark-muted"
            >
              <FaGooglePlay />
              Android
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
