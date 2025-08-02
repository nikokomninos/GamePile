import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import GameCard from "../components/GameCard";

//const SearchBar = () => {
//	return (
//		<div className="font-lato w-100 h-12 mb-10 bg-neutral-900 rounded-2xl border
//                        border-neutral-500 flex items-center justify-center drop-shadow-md">
//			<input className="w-full h-full p-4 focus:outline-none" type="text" placeholder="Search..." />
//		</div>
//	)
//}
//
//export default SearchBar;
//
//import { useState } from "react";
//import { invoke } from "@tauri-apps/api/tauri";
//import GameCard from "./GameCard";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [games, setGames] = useState<any[]>([]);

    const searchGames = async () => {
        if (!query.trim()) return;

        try {
            const response = await invoke("fetch_game_info", { name: query });
            const data = JSON.parse(response as string);
            setGames(data);
        } catch (err) {
            console.error("Search error:", err);
            setGames([]);
        }
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div className="font-lato w-full max-w-xl h-12 mb-10 bg-neutral-900 rounded-2xl border
                            border-neutral-500 flex items-center justify-center drop-shadow-md">
                <input
                    className="w-full h-full p-4 focus:outline-none bg-transparent text-white"
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            searchGames();
                        }
                    }}
                />
            </div>

            <div className="flex flex-wrap justify-center">
                {games.map((game, idx) => (
                    <GameCard key={idx} name={game.name} desc={game.summary || "No description available."} />
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
