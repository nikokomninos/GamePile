import { invoke } from "@tauri-apps/api/core";
import { useState, useEffect } from "react";

import GameCover from "./GameCover";

const LibraryCategoryPreview = ({ category, dbCategory }: { category: string, dbCategory: string }) => {
    const [categoryList, setCategoryList] = useState<any[]>([]);

    const getCategory = async () => {
        const response = await invoke("db_list_category", { category: dbCategory });
        const data = JSON.parse(response as string);
        console.log(data);
        setCategoryList(data);
    }

    useEffect(() => {
        const callGetCategory = async () => {
            await getCategory();
        }
        callGetCategory();
    }, [])

    return (
        <div className="p-5">
            <h1 className="font-lato font-bold text-2xl pb-5">{category}</h1>
            <ul className="flex flex-wrap">
                {categoryList.map((_, index) => (
                    <GameCover key={index} cover={categoryList[index][2]} />
                ))}
            </ul>
        </div>
    );
}

export default LibraryCategoryPreview;
