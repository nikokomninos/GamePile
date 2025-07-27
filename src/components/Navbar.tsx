import { Link, useLocation } from "react-router-dom";

import { FaHome, FaSearch } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="fixed w-14 h-screen bg-neutral-900 flex flex-col
                        items-center rounded-r-lg drop-shadow-md">

            <div className="flex flex-col items-center">
                <NavBarIcon icon={<FaHome size="20"/>} to="/" active={location.pathname === "/"} />
                <NavBarIcon icon={<FaSearch size="20"/>} to="/search" active={location.pathname === "/search"} />
                <NavBarIcon icon={<ImBooks size="20"/>} to="/library" active={location.pathname === "/library"} />
            </div>

            <div className="mt-auto">
                <NavBarIcon icon={<IoIosSettings size="22"/>} to="/settings" active={location.pathname === "/settings"} />
            </div>

        </div>
    )
}

const NavBarIcon = ({ icon, to, active }: { icon: JSX.Element, to: string, active: boolean }) => {
    return (
        <Link to={to}>
            <div className={`relative flex items-center justify-center
            h-10 w-10 mt-2 mb-2 mx-auto trnasition-all duration-100 ease-linear
            ${active ? "bg-zinc-700 rounded-sm" : "bg-zinc-800 rounded-lg hover:bg-zinc-700 hover:rounded-sm"}`}>
                {icon}
            </div>
        </Link>
    )
}

export default Navbar;
