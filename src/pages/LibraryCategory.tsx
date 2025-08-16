import { useLocation } from "react-router-dom";

import GameCover from "../components/GameCover";
import { BiSolidCategoryAlt } from "react-icons/bi";

const LibraryCategory = () => {
  const location = useLocation();
  const state = location.state;

  return (
    <div>
      <div
        className="relative flex items-center justify-center
                            h-5 mb-5 bg-neutral-800 drop-shadow-md"
      >
        <h1 className="font-lato font-bold text-xs flex justify-center items-center gap-1">
          {<BiSolidCategoryAlt size="12" />} Category
        </h1>
      </div>

      <div className="p-4">
        <h1 className="font-lato font-bold text-4xl pb-10 text-center">
          {state.category}
        </h1>
        <ul className="flex flex-wrap justify-center">
          {state.categoryList.map((_: any, index: number) => (
            <GameCover
              key={index}
              id={state.categoryList[index][0]}
              name={state.categoryList[index][1]}
              desc={state.categoryList[index][2]}
              cover={state.categoryList[index][3]}
              platforms={state.categoryList[index][4].split(",")}
              screenshot={state.categoryList[index][5]}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LibraryCategory;
