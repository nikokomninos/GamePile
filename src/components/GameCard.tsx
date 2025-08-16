/**
 * GameCard component
 * A clickable card element containing info about a game
 * Displayed in a game search
 * When a GameCard is clicked, its state is passed to GameInfo to
 * dynamically create a page for the current game
 *
 * Props:
 * - name: the name of a game
 * - desc: the description of a game
 * - cover: the cover image of a game (.jpg)
 * - platforms: an array containing the platforms a game is on (abbreviation, name)
 * - screenshot: a screenshot of a game
 * - to: a React DOM route (leading to /gameinfo)
 */

import { Link } from "react-router-dom";

import { IoLogoGameControllerB } from "react-icons/io";

const GameCard = ({
  id: igdb_id,
  name = "Game Name",
  desc = "No description",
  cover,
  platforms,
  screenshot,
  to,
}: {
  id: string;
  name: string;
  desc: string;
  cover: string;
  platforms?: { abbreviation: string; name: string }[];
  screenshot: string;
  to: string;
}) => {
  return (
    <Link
      to={to}
      state={{
        igdb_id: igdb_id,
        name: name,
        desc: desc,
        cover: cover,
        platforms: platforms,
        screenshot: screenshot,
      }}
    >
      {/* Main card background */}
      <div
        className="w-82 h-40 m-2 rounded-lg bg-neutral-950 flex items-center justify-center font-lato
                        hover:drop-shadow-2xl transition-all duration-150 ease-linear"
      >
        {/* Left side: cover and platform */}
        <div className="w-20 h-35 mr-2 rounded-lg flex flex-col items-center">
          <div className="w-20 h-25 mb-2 rounded-lg">
            <img src={cover} className="w-full h-full rounded-lg" />
          </div>

          <div className="bg-zinc-800 rounded-lg flex w-full h-full items-center justify-center">
            <p className="flex font-lato text-xs line-clamp-1 items-center justify-center gap-2">
              {<IoLogoGameControllerB />}
              {platforms?.[0].abbreviation || "N/A"}
            </p>
          </div>
        </div>

        {/* Right side: game name, description, game screenshot */}
        <div className="relative w-55 h-35 rounded-lg p-3 bg-zinc-800">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${screenshot})` }}
          ></div>

          <div className="absolute inset-0 bg-black opacity-65"></div>

          <div className="relative z-10 p-3">
            <h1 className="font-bold pb-2 line-clamp-2">{name}</h1>
            <p className="text-neutral-400 text-xs w-full line-clamp-3">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
