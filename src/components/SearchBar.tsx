import { useState, ChangeEvent } from "react";
import { invoke } from "@tauri-apps/api/core";
import GameCard from "../components/GameCard.tsx"

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState<any[]>([]);

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            searchGame();
        }
    }

    const searchGame = async () => {
        const response = await invoke("fetch_game_info", { name: search });
        const data = JSON.parse(response as string);
        setResults(data);
    }

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="font-lato w-100 h-12 mb-10 bg-neutral-800 rounded-2xl border
                      border-neutral-500 flex items-center justify-center drop-shadow-md">
                <input className="w-full h-full p-4 focus:outline-none" type="text" placeholder="Search..."
                    value={search} onChange={e => setSearch(e.target.value)} onKeyDown={handleKeyDown} />
            </div>

            <div>
                <ul className="w-full flex flex-wrap items-center justify-center">
                    {results.map((_, index) => (
                        <GameCard name={results[index].name} desc={results[index].summary} 
                        cover={results[index].cover?.url.replace("t_thumb", "t_cover_big") ?? "/src/assets/fallback.png"}
                            platform_name={results[index].platforms?.[0]?.abbreviation} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SearchBar;
