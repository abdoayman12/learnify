import BookOpenIcon from "@/components/UI/Icons/BookOpen";
import GoogleButton from "@/components/Button/GoogleProviderButton";
import GitHubButton from "@/components/Button/GitHubProviderButton";
import Input from "@/components/UI/Input/Input";
import { Link } from "react-router-dom";
import useSignup from "@/hooks/Signup";

const Signup = () => {
    const { handleSubmit } = useSignup();
    return (
        <section className="py-20">
            <div className="mx-auto w-full max-w-md px-4">
                <div className="grid place-items-center mb-8">
                    <BookOpenIcon />
                    <h1 className="w-full text-center text-3xl font-bold mt-6 text-text dark:text-text-inverted">
                        Create your account
                    </h1>
                    <p className="w-full text-center mt-2 text-text-muted dark:text-text-muted">
                        Start learning from 2,500+ courses today
                    </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <div className="grid grid-cols-2 gap-3">
                        <GoogleButton />
                        <GitHubButton />
                    </div>
                    <div className="my-6 flex items-center">
                        <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
                        <span className="px-4 text-sm font-semibold text-gray-500">
                            or sign up with email
                        </span>
                        <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            label="Full Name"
                            name="fullName"
                            type="text"
                            placeholder="John Doe"
                        />
                        <Input
                            label="Email address"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                        />
                        <div>
                            <Input
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="Create a password"
                            />

                            <p className="mt-2 text-xs text-gray-500">
                                Must be at least 8 characters
                            </p>
                        </div>

                        <div className="flex items-start">
                            <input
                                className="mt-1 w-4 h-4"
                                type="checkbox"
                                required
                                id="terms"
                                name="terms"
                            />
                            <label
                                className="ml-2 text-sm text-gray-600 dark:text-gray-400"
                                htmlFor="terms"
                            >
                                I agree to the{" "}
                                <Link
                                    className="font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-900"
                                    to="/terms"
                                >
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link
                                    className="font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-900"
                                    to="/privacy"
                                >
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-full bg-primary-600 py-4 font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-700/30"
                        >
                            Create Account
                        </button>
                    </form>
                </div>

                <div className="my-6 flex justify-center items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-400">
                        Already have an account?
                    </span>
                    <Link
                        to="/login"
                        className="text-primary-600 font-semibold dark:text-primary-400"
                    >
                        Sign in
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Signup;
