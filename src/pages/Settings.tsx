import { IoIosSettings } from "react-icons/io";

const Settings = () => {
    return (
        <div>
            <div className="relative flex items-center justify-center
                            h-10 bg-neutral-900 drop-shadow-md">
                <h1 className="font-lato font-bold flex justify-center items-center gap-2">{<IoIosSettings size="16"/>} Settings</h1>
            </div>

        </div>
    )
}

export default Settings;
