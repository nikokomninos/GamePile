import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
    return (
        <div className="font-lato w-100 h-12 mb-10 bg-neutral-900 rounded-2xl border
                        border-neutral-500 flex items-center justify-center drop-shadow-md">
            <input className="w-full h-full p-4 focus:outline-none" type="text" placeholder="Search..." />
        </div>
    )
}

export default SearchBar;
