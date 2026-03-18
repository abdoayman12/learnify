import { Globe, ShieldCheck, BookOpen } from "lucide-react";
import { FaUsers, FaArrowRight } from "react-icons/fa6";
import { FiZap } from "react-icons/fi";
import { Link } from "react-router-dom";

const list = [
    {
        title: "50K+",
        description: "Active Students",
    },
    {
        title: "500+",
        description: "Expert Instructors",
    },
    {
        title: "2,500+",
        description: "Quality Courses",
    },
    {
        title: "95%",
        description: "Success Rate",
    },
];

const values = [
    {
        title: "Quality First",
        description:
            "Every course goes through a rigorous review process to ensure the highest quality content for our learners.",
        Icon: BookOpen,
    },
    {
        title: "Community Driven",
        description:
            "We foster a supportive learning community where students and instructors can connect and grow together.",
        Icon: FaUsers,
    },
    {
        title: "Innovation",
        description:
            "We continuously improve our platform with the latest technology to provide the best learning experience.",
        Icon: FiZap,
    },
];

const About = () => {
    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-800 to-indigo-950 py-20 lg:py-32">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:44px_44px]"></div>
                </div>
                <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="inline-block rounded-full bg-primary-500/20 px-4 py-2 text-sm font-medium text-primary-300">
                            Our Story
                        </span>
                        <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                            Democratizing education for{" "}
                            <span className="bg-gradient-to-br from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                                everyone
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-primary-200">
                            We believe that education should be accessible to
                            everyone, everywhere. That's why we've built a
                            platform that connects learners with world-class
                            instructors.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-12 border-b dark:border-gray-800 border-gray-200">
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                    {list.map((item) => (
                        <div key={item.title} className="text-center">
                            <p className="text-4xl lg:text-5xl font-bold text-primary-600">
                                {item.title}
                            </p>
                            <p className="text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid items-center lg:grid-cols-2 gap-12 lg:gap-16">
                        <div>
                            <span className="text-sm font-bold text-primary-600 uppercase tracking-wider">
                                Our Mission
                            </span>
                            <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
                                Empowering learners worldwide
                            </h2>
                            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
                                At Learnify, we're on a mission to transform
                                lives through learning. We believe that everyone
                                deserves access to high-quality education,
                                regardless of their background or location.
                            </p>
                            <p className="mt-4 text-gray-600 dark:text-gray-400">
                                Our platform connects passionate instructors
                                with eager learners, creating a global community
                                of knowledge sharing. From coding to design,
                                business to photography, we offer courses that
                                help people build real skills for the modern
                                world.
                            </p>
                            <div className="mt-8 grid gap-6 sm:grid-cols-2">
                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/30">
                                        <Globe className="text-primary-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            Global Reach
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                            Students from 150+ countries
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/30">
                                        <ShieldCheck className="text-primary-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            Quality Content
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                            Vetted by industry experts
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-800">
                                <img
                                    className="w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop"
                                    alt="meet the team"
                                />
                            </div>
                            <div className="animate-float absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800">
                                <div className="flex items-center gap-2">
                                    <div className="rounded-full bg-[#2eff04] w-2 h-2 animate-pulse"></div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Founded
                                    </p>
                                </div>
                                <p className="mt-1 font-display text-2xl font-bold text-gray-900 dark:text-white">
                                    2018
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    San Francisco, CA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-50 dark:bg-gray-900/50 py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="text-center">
                        <span className="text-sm text-primary-700 uppercase font-semibold tracking-wider">
                            Our Values
                        </span>
                        <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-text dark:text-text-inverted">
                            What drives us forward
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="rounded-2xl bg-surface p-8 shadow-xl dark:bg-surface-dark-muted"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/30">
                                    <value.Icon
                                        size={26}
                                        className="text-primary-600"
                                    />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-text dark:text-text-inverted">
                                    {value.title}
                                </h3>
                                <p className="mt-3 text-gray-600 dark:text-gray-400 text-wrap">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-br from-primary-600 via-primary-900 to-violet-900 py-16">
                <div className="mx-auto max-w-7xl text-center px-4 lg:px-8">
                    <h2 className="text-3xl font-bold text-text-inverted">
                        Ready to start your learning?
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-primary-100">
                        Join millions of learners from around the world and
                        start your learning journey today.
                    </p>
                    <Link
                        to="/courses"
                        className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-primary-600 shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-gray-200"
                    >
                        <FaArrowRight className="relative -left-4 group-hover:translate-x-3 opacity-0 scale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" />
                        <span className="relative -left-4 group-hover:translate-x-6 transition-all duration-300">
                            Explore Courses
                        </span>
                        <FaArrowRight className="relative -right-1 group-hover:scale-0 scale-110 group-hover:translate-x-3 opacity-100 group-hover:opacity-0 transition-all duration-300" />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default About;
