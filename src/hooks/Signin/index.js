const useSignin = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = Object.fromEntries(formData.entries());
        const remember = formData.get("remember");

        data.remember = !!remember;

        console.log(data);

        e.target.reset();
    };

    return { handleSubmit };
};

export default useSignin;
