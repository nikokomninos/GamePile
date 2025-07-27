import { FaSearch } from "react-icons/fa";

import SearchBar from "../components/SearchBar";
import GameCard from "../components/GameCard";

const Search = () => {
    return (
        <div>
            <div className="relative flex items-center justify-center
                            h-10 mr-2 mb-5 bg-neutral-900 rounded-b-lg
                            drop-shadow-md">
                <h1 className="font-lato font-bold flex justify-center items-center gap-2">{<FaSearch size="14"/>} Search</h1>
            </div>

            <div className="flex items-center justify-center">
                <SearchBar />
            </div>

            <div className="flex flex-row items-center justify-center">
                <GameCard />
                <GameCard />
                <GameCard />
            </div>

            <div className="flex flex-row items-center justify-center">
                <GameCard />
                <GameCard />
                <GameCard />
            </div>

        </div>
    )
}

export default Search;
