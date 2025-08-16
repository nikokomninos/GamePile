import { Link } from "react-router-dom";

const GameCover = ({ id: igdb_id, name, desc, cover, platforms, screenshot }:
                   {id: string, name: string, desc: string
                       cover: string, platforms: string, screenshot: string}) => {

    return (
        <Link
            to={"/gameinfo"}
            state={{
                igdb_id: igdb_id,
                name: name,
                desc: desc,
                cover: cover,
                platforms: platforms,
                screenshot: screenshot
            }}>
        <div className="m-2">
            <img src={cover} className="w-40 rounded-xl transition-all
                     duration-100 ease-linear hover:rounded-sm" />
        </div>
        </Link>
    )
}

export default GameCover;
