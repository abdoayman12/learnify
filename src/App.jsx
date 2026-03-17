import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Footer from "./components/footer/Footer";

/* ── Placeholder pages (each teammate fills their page) ── */
const Placeholder = ({ title }) => (
    <main className="container-custom py-20 text-center">
        <h1 className="section-title">{title}</h1>
        <p className="section-subtitle mx-auto">
            This page is under construction.
        </p>
    </main>
);

/* ── Import pages as teammates build them ──────────────── */
// import Home        from "./pages/Home";
// import Courses     from "./pages/Courses";
// import Categories  from "./pages/Categories";
// import Instructors from "./pages/Instructors";
// import About       from "./pages/About";
// import Login       from "./pages/Login";
// import Signup      from "./pages/Signup";

export default function App() {
    return (
        <>
            {/* Navbar is shared across ALL pages */}
            <Navbar />

            <Routes>
                <Route path="/" element={<Placeholder title="Home 🏠" />} />
                <Route
                    path="/courses"
                    element={<Placeholder title="Courses 📚" />}
                />
                <Route
                    path="/categories"
                    element={<Placeholder title="Categories 🗂️" />}
                />
                <Route
                    path="/instructors"
                    element={<Placeholder title="Instructors 👩‍🏫" />}
                />
                <Route
                    path="/about"
                    element={<Placeholder title="About Us ℹ️" />}
                />
                <Route path="/login" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="*"
                    element={<Placeholder title="404 – Page Not Found" />}
                />
            </Routes>
            <Footer />
        </>
    );
}
