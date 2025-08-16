import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const LibraryViewButton = ({
  categoryList,
  category,
}: {
  categoryList: any[];
  category: string;
}) => {
  return (
    <Link
      to="/librarycategory"
      state={{
        categoryList: categoryList,
        category: category,
      }}
    >
      <button
        className="flex items-center justify-center
                               font-lato font-bold w-40 h-53 gap-2 m-2
                               bg-neutral-700 rounded-lg cursor-pointer
                               hover:rounded-sm hover:bg-neutral-600
                               transition-all duration-100 ease-linear"
      >
        View All {<FaArrowRight />}
      </button>
    </Link>
  );
};

export default LibraryViewButton;
