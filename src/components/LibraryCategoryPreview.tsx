import { invoke } from "@tauri-apps/api/core";
import { useState, useEffect } from "react";

import GameCover from "./GameCover";
import LibraryViewButton from "./LibraryViewButton";

const LibraryCategoryPreview = ({
  category,
  dbCategory,
}: {
  category: string;
  dbCategory: string;
}) => {
  const [categoryList, setCategoryList] = useState<any[]>([]);

  const getCategory = async () => {
    const response = await invoke("db_list_category", { category: dbCategory });
    const data = JSON.parse(response as string);
    console.log(data);
    setCategoryList(data);
  };

  useEffect(() => {
    const callGetCategory = async () => {
      await getCategory();
    };
    callGetCategory();
  }, []);

  return (
    <div className="p-4">
      <h1 className="font-lato font-bold text-3xl pb-3 pl-2">{category}</h1>
      <ul className="flex flex-wrap">
        {categoryList.slice(0, 5).map((_, index) => (
          <GameCover
            key={index}
            id={categoryList[index][0]}
            name={categoryList[index][1]}
            desc={categoryList[index][2]}
            cover={categoryList[index][3]}
            platforms={categoryList[index][4].split(",")}
            screenshot={categoryList[index][5]}
          />
        ))}
        <LibraryViewButton categoryList={categoryList} category={category} />
      </ul>
    </div>
  );
};

export default LibraryCategoryPreview;
