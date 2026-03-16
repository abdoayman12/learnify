const useSignin = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = Object.fromEntries(formData.entries());

        console.log("email:", data.email);
        console.log("password:", data.password);

        e.target.reset();
    };

    return { handleSubmit };
};

export default useSignin;
