const useSignup = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const terms = formData.get("terms");
        const data = Object.fromEntries(formData.entries());
        data.terms = !!terms;
        console.log(data);
    };

    return { handleSubmit };
};

export default useSignup;
