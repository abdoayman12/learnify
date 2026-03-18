import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const BookOpenIcon = ({ size = 30, HW = 12 }) => {
    return (
        <Link
            to="/"
            className={`w-${HW} h-${HW} bg-primary-600 p-2 flex items-center justify-center rounded-xl text-white transition duration-300`}
        >
            <BookOpen size={size} />
        </Link>
    );
};

export default BookOpenIcon;
