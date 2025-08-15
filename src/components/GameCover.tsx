const GameCover = ({ cover }: {cover: string}) => {

    return (
        <div className="m-2">
            <img src={cover} className="w-35 rounded-xl" />
        </div>
    )
}

export default GameCover;
