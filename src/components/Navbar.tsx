import { Link, useLocation } from "react-router-dom";

import { FaHome, FaSearch } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="fixed w-14 h-screen bg-neutral-800 flex flex-col
                        items-center drop-shadow-md">

            <div className="flex flex-col items-center">
                <NavBarIcon icon={<ImBooks size="20"/>} to="/" active={location.pathname === "/"} />
                <NavBarIcon icon={<FaSearch size="20"/>} to="/search" active={location.pathname === "/search"} />
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
            ${active ? "bg-neutral-600 rounded-sm" : "bg-neutral-700 rounded-lg hover:bg-neutral-700 hover:rounded-sm"}`}>
                {icon}
            </div>
        </Link>
    )
}

export default Navbar;
