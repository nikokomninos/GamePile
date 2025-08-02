import { ImBooks } from "react-icons/im";

const Library = () => {
    return (
        <div>
            <div className="relative flex items-center justify-center
                            h-10 bg-neutral-900 drop-shadow-md">
                <h1 className="font-lato font-bold flex justify-center items-center gap-2">{<ImBooks size="16"/>} Library</h1>
            </div>

        </div>
    )
}

export default Library;
