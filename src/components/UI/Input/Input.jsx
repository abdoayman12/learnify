import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Input = ({ label, name, type, isForgetPasswordVisible, ...props }) => {
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordIsVisible((prevState) => !prevState);
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <label
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    {label}
                </label>

                {isForgetPasswordVisible && (
                    <a
                        href="/forgot-password"
                        className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400"
                    >
                        Forgot password?
                    </a>
                )}
            </div>
            <div className="relative mt-2">
                <input
                    className="block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    required
                    autoComplete="on"
                    id={name}
                    name={name}
                    type={
                        type === "password"
                            ? passwordIsVisible
                                ? "text"
                                : "password"
                            : type
                    }
                    {...props}
                />

                {type === "password" && passwordIsVisible && (
                    <EyeOff
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        onClick={togglePasswordVisibility}
                    />
                )}
                {type === "password" && !passwordIsVisible && (
                    <Eye
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        onClick={togglePasswordVisibility}
                    />
                )}
            </div>
        </div>
    );
};

export default Input;
