import GitHubIcon from "@/components/UI/Icons/GitHub";

const GitHubButton = ({ onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="font-semibold text-gray-600 border py-3 px-4 flex justify-center items-center gap-2 rounded-xl"
        >
            <GitHubIcon />
            GitHub
        </button>
    );
};

export default GitHubButton;
