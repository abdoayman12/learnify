import { useState } from "react";

const useSignin = () => {
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordIsVisible((prevState) => !prevState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = Object.fromEntries(formData.entries());

        console.log("email:", data.email);
        console.log("password:", data.password);
    };

    return { passwordIsVisible, togglePasswordVisibility, handleSubmit };
};

export default useSignin;
