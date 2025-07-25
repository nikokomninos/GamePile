import { Link } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";

const Navbar = () => {
    return (
        <div className="fixed w-14 h-screen bg-neutral-900 flex flex-col
                        items-center rounded-r-lg">

            <div className="flex flex-col items-center">
                <NavBarIcon icon={<FaHome size="20"/>}/>
                <NavBarIcon icon={<FaSearch size="20"/>}/>
                <NavBarIcon icon={<ImBooks size="20"/>}/>
            </div>

            <div className="mt-auto">
                <NavBarIcon icon={<IoIosSettings size="22"/>}/>
            </div>

        </div>
    )
}

const NavBarIcon = ({ icon }: { icon: JSX.Element}) => {
    return (
        <div className="relative flex items-center justify-center
                        h-10 w-10 mt-2 mb-2 mx-auto bg-zinc-800
                        text-neutral-200 rounded-lg hover:rounded-sm
                        hover:bg-zinc-700 transition-all
                        duration-100 ease-linear">
            {icon}
        </div>
    )
}

export default Navbar;
