/**
 * Game Info Page
 * Route - redirects from /search when a GameCard element is clicked
 *
 * Displays various pieces of information about a game,
 * including title, description, platforms, etc.
 * Allows user to add game to library category.
 */

import { useLocation } from "react-router-dom";
import { invoke } from "@tauri-apps/api/core";

import { IoLogoGameControllerB } from "react-icons/io";

const GameInfo = () => {
    // Pass in game info from GameCard
    const location = useLocation();
    const state = location.state;

    const addGameToCategory = async (category: String) => {
        try {
            await invoke("db_add_game", {
                category: category,
                igdbId: state.igdb_id,
                name: state.name,
                desc: state.desc,
                cover: state.cover,
                platforms: state.platforms.map(platform => platform.name),
                screenshot: state.screenshot
            });
        } catch (e) {
            console.log(e);
        }
    }

    const removeGameFromBacklog = async () => {
        try {
            await invoke("db_remove_game", {igdbId: state.igdb_id})
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="font-lato">
            <div className="flex items-center justify-center
                            h-5 bg-neutral-800 drop-shadow-md">
                <h1 className="font-bold text-xs flex justify-center
                               items-center gap-2">{<IoLogoGameControllerB size="12" />}Game</h1>
            </div>

            {/* Top portion; game screenshot, name and cover */}
            <div className="font-lato">
                <div className="relative w-full h-100 overflow-hidden">
                    <img src={state.screenshot} className="absolute top-0
                             left-0 w-full h-full object-cover mask-b-to-90%" />
                    <div className="relative z-10 flex items-end justify-between h-full p-4">
                        <h1 className="font-bold text-5xl">{state.name}</h1>
                        <img src={state.cover} className="w-50 rounded-xl drop-shadow-2xl" />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">

                    {/* Left column; game description */}
                    <div className="col-span-2 pl-5">
                        <p className="text-neutral-400 text-justify">{state.desc}</p>
                    </div>

                    {/* Right column; game platform(s), library management buttons */}
                    <div className="flex flex-col items-end justify-end pr-4">
                        <div className="bg-neutral-800 w-50 h-full p-4 mb-3 rounded-lg text-sm">
                            <h1 className="flex justify-center items-center font-bold mb-5">Platforms</h1>
                            <ul className="list-disc pl-5">
                                {state.platforms?.map((platform, index) => (
                                    <li key={index} className="mb-2 gap-2">{platform.name || platform}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col bg-neutral-800 w-50 h-full p-4
                                        rounded-lg items-center justify-center text-sm mb-3">
                            <h1 className="flex justify-center items-center font-bold mb-5">Add To List</h1>
                            <ul>
                                <button onClick={() => addGameToCategory("want_to_play")} className="flex items-center justify-center
                                               bg-neutral-700 w-30 h-6
                                               rounded-lg font-bold mb-2
                                               transition-all duration-100
                                               ease-linear hover:bg-neutral-600
                                               hover:rounded-sm cursor-pointer">Want To Play</button>

                                <button onClick={() => addGameToCategory("playing")} className="flex items-center justify-center
                                               bg-neutral-700 w-30 h-6
                                               rounded-lg font-bold mb-2
                                               transition-all duration-100
                                               ease-linear hover:bg-neutral-600
                                               hover:rounded-sm cursor-pointer">Playing</button>

                                <button onClick={() => addGameToCategory("beaten")} className="flex items-center justify-center
                                               bg-neutral-700 w-30 h-6
                                               rounded-lg font-bold mb-2
                                               transition-all duration-100
                                               ease-linear hover:bg-neutral-600
                                               hover:rounded-sm cursor-pointer">Beaten</button>

                                <button onClick={() => addGameToCategory("on_hold")} className="flex items-center justify-center
                                               bg-neutral-700 w-30 h-6
                                               rounded-lg font-bold mb-2
                                               transition-all duration-100
                                               ease-linear hover:bg-neutral-600
                                               hover:rounded-sm cursor-pointer">On Hold</button>

                                <button onClick={() => addGameToCategory("abandoned")} className="flex items-center justify-center
                                               bg-neutral-700 w-30 h-6
                                               rounded-lg font-bold mb-2
                                               transition-all duration-100
                                               ease-linear hover:bg-neutral-600
                                               hover:rounded-sm cursor-pointer">Abandoned</button>
                            </ul>
                        </div>

                        <div className="flex flex-col bg-neutral-800 w-50 h-full p-4
                                        rounded-lg items-center justify-center text-sm">
                            <button onClick={ () => removeGameFromBacklog() }className="flex items-center justify-center bg-neutral-700 h-12
                                               rounded-lg font-bold transition-all
                                               duration-100 ease-linear hover:bg-neutral-600
                                               hover:rounded-sm cursor-pointer">Remove From All Categories</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default GameInfo;
