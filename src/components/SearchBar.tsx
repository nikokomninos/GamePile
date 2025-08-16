/**
 * SearchBar component
 * A search bar to be put on the search page. When a game name
 * is searched for, it will generate a list of GameCard components
 * containing the search results
 */

import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import GameCard from "../components/GameCard.tsx";

const SearchBar = () => {
  // The state of what's being put into the search bar
  const [search, setSearch] = useState("");
  // The state of the search results
  const [results, setResults] = useState<any[]>([]);

  /**
   * Checks for when the user hits "enter" on the search bar
   * to register a search
   * @param e - a change event
   */
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      searchGame();
    }
  };

  /**
   * Invokes the backend to search IGDB API for a game
   */
  const searchGame = async () => {
    const response = await invoke("search_games", { term: search });
    const data = JSON.parse(response as string);
    setResults(data);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div
        className="font-lato w-100 h-12 mb-10 bg-neutral-800 rounded-2xl border
                      border-neutral-500 flex items-center justify-center drop-shadow-md"
      >
        <input
          className="w-full h-full p-4 focus:outline-none"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div>
        <ul className="w-full flex flex-wrap items-center justify-center">
          {/* The list of results from the search */}
          {results.map((_, index) => (
            <GameCard
              id={results[index].id}
              name={results[index].name}
              desc={results[index].summary}
              cover={
                results[index].cover?.url.replace("t_thumb", "t_cover_big") ??
                "/src/assets/fallback.png"
              }
              platforms={results[index].platforms}
              screenshot={results[index].screenshots?.[0]?.url.replace(
                "t_thumb",
                "t_720p",
              )}
              to="/gameinfo"
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
