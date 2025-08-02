import { FaSearch } from "react-icons/fa";

import SearchBar from "../components/SearchBar";
import GameCard from "../components/GameCard";
import GameSearch from "../components/GameSearch";

const Search = () => {
    return (
        <div>
            <div className="relative flex items-center justify-center
                            h-10 mb-5 bg-neutral-900 drop-shadow-md">
                <h1 className="font-lato font-bold flex justify-center items-center gap-2">{<FaSearch size="14" />} Search</h1>
            </div>

            <div className="flex items-center justify-center">
                <SearchBar />
            </div>

        </div>

    )
}

export default Search;
