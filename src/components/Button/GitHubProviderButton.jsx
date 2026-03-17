import GitHubIcon from "@/components/UI/Icons/GitHub";

const GitHubButton = ({ onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="font-semibold text-gray-600 dark:text-gray-400 dark:border-gray-700 border py-3 px-4 flex justify-center items-center gap-2 rounded-xl dark:bg-gray-800 dark:hover:bg-gray-700"
        >
            <GitHubIcon />
            GitHub
        </button>
    );
};

export default GitHubButton;
