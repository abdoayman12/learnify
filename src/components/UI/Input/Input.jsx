const Input = ({ label, name, type, ...props }) => {
  return (
    <div>
      <label
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        id={name}
        name={name}
        type={type}
        {...props}
      />
    </div>
  );
};

export default Input;
