import GameCard from "../components/GameCard";

import { FaHome } from "react-icons/fa";

const Home = () => {
    return (
        <div>
            <div className="relative flex items-center justify-center
                            h-10 mb-5 bg-neutral-900 drop-shadow-md">
                <h1 className="font-lato font-bold flex justify-center items-center gap-2">{<FaHome size="16" />} Home</h1>
            </div>

            <div className="font-lato flex items-center justify-center text-center mx-auto">
                <div>
                    <h1 className="font-bold text-5xl pb-3">GamePile</h1>
                    <h3>A simple game backlog manager</h3>
                </div>
            </div>

        </div>
    )
}

export default Home;
