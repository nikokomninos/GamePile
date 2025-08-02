import { IoLogoGameControllerB } from "react-icons/io";

const GameCard = ({ name="Game Name", desc="No description", cover, platform_name="N/A" }: { name: string, desc: string, cover: string, platform_name: string }) => {
    return (
        <div className="w-82 h-40 m-2 rounded-lg bg-neutral-900 flex items-center justify-center font-lato
                        hover:drop-shadow-2xl transition-all duration-150 ease-linear">
            <div className="w-20 h-35 mr-2 rounded-lg flex flex-col items-center">
                <div className="w-20 h-25 mb-2 rounded-lg">
                    <img src={cover} className="w-full h-full rounded-lg" />
                </div>

                <div className="bg-zinc-800 rounded-lg flex w-full h-full items-center justify-center">
                    <p className="flex font-lato text-xs line-clamp-1 items-center justify-center gap-2">{<IoLogoGameControllerB />}{platform_name}</p>
                </div>
            </div>

            <div className="w-55 h-35 rounded-lg p-3 bg-zinc-800">
                <h1 className="font-bold pb-2 line-clamp-2">{name}</h1>
                <p className="text-neutral-400 text-xs w-full line-clamp-3">{desc}</p>
            </div>
        </div>
    )
}

export default GameCard;
