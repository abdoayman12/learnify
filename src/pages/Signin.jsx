import { Link } from "react-router-dom";

import Input from "@/components/UI/Input/Input";
import GoogleIcon from "@/components/UI/Icons/Google";
import GitHubIcon from "@/components/UI/Icons/GitHub";
import useSignin from "@/hooks/Signin";

import { BookOpen, Eye, EyeOff } from "lucide-react";

const Signin = () => {
    const { handleSubmit, passwordIsVisible, togglePasswordVisibility } =
        useSignin();

    return (
        <section className="py-20">
            <div className="w-full max-w-md mx-auto px-4">
                <div className="grid place-items-center mb-8">
                    <div className="w-12 h-12 bg-primary-600 p-2 flex items-center justify-center rounded-xl text-white group-hover:scale-105 transition duration-300">
                        <BookOpen
                            size={30}
                            className="text-white bg-primary-600"
                        />
                    </div>
                    <h1 className="w-full text-center text-3xl font-bold mt-6 text-gray-900 dark:text-white">
                        Welcome back
                    </h1>
                    <p className="w-full text-center mt-2 text-black/50">
                        Sign in to continue your learning journey
                    </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            label="Email address"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                        />
                        <div className="mb-6">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    Password
                                </label>

                                <a
                                    href="/forgot-password"
                                    className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400"
                                >
                                    Forgot password?
                                </a>
                            </div>
                            <div className="relative mt-2">
                                <input
                                    type={
                                        passwordIsVisible ? "text" : "password"
                                    }
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pr-12 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordIsVisible ? <EyeOff /> : <Eye />}
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center ">
                            <input
                                type="checkbox"
                                id="remember"
                                name="remember"
                                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800"
                            />
                            <label
                                htmlFor="remember"
                                className="ml-2 text-sm text-gray-600 dark:text-gray-400"
                            >
                                Remember me for 30 days
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-full bg-primary-600 py-4 font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-700 hover:shadow-xl"
                        >
                            Sign In
                        </button>
                    </form>
                    <div className="my-6 flex items-center">
                        <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
                        <span className="px-4 text-sm font-semibold text-gray-500">
                            or continue with
                        </span>
                        <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <button className="font-semibold text-gray-600 border py-3 px-4 flex justify-center items-center gap-2 rounded-xl">
                            <GoogleIcon />
                            Google
                        </button>
                        <button className="font-semibold text-gray-600 border py-3 px-4 flex justify-center items-center gap-2 rounded-xl">
                            <GitHubIcon />
                            GitHub
                        </button>
                    </div>
                </div>

                <div className="my-6 flex justify-center items-center gap-2">
                    <span className="text-gray-600">
                        Don't have an account?
                    </span>
                    <Link
                        to="/signup"
                        className="text-primary-600 font-semibold"
                    >
                        Sign up for free
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Signin;
