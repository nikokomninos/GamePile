const GameCard = ({ name="Game Name", desc="Game Description" }: { name: string, desc: string }) => {
    return (
        <div className="w-82 h-40 m-2 rounded-lg bg-neutral-900 flex items-center justify-center font-lato
                        hover:drop-shadow-2xl transition-all duration-150 ease-linear">
            <div className="w-25 h-35 mr-2 rounded-lg flex items-center justify-center bg-zinc-700">
                <h1>Game Cover</h1>
            </div>

            <div className="w-50 h-35 rounded-lg p-3 bg-zinc-800">
                <h1 className="font-bold pb-2 line-clamp-2">{name}</h1>
                <p className="text-neutral-400 text-xs w-full line-clamp-3">{desc}</p>
            </div>
        </div>
    )
}

export default GameCard;
