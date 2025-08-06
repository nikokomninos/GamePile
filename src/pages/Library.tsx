import { ImBooks } from "react-icons/im";

const Library = () => {
    return (
        <div>
            <div className="relative flex items-center justify-center
                            h-5 mb-5 bg-neutral-800 drop-shadow-md">
                <h1 className="font-lato font-bold text-xs flex justify-center items-center gap-2">{<ImBooks size="10"/>} Library</h1>
            </div>

        </div>
    )
}

export default Library;
