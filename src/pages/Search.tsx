/**
 * Search Page
 * Route - redirects from hitting search button on navbar
 *
 * Allows the user to search for games
 */

import { FaSearch } from "react-icons/fa";

import SearchBar from "../components/SearchBar";

const Search = () => {
    return (
        <div>
            <div className="relative flex items-center justify-center
                            h-5 mb-5 bg-neutral-800 drop-shadow-md">
                <h1 className="font-lato font-bold text-xs flex
                               justify-center items-center gap-2">{<FaSearch size="10" />} Search</h1>
            </div>

            <div className="flex items-center justify-center">
                <SearchBar />
            </div>

        </div>

    )
}

export default Search;
