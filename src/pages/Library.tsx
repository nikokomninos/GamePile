/**
 * Library Page
 * Route - redirects from hitting library button on navbar
 *
 * Displays the user's different library categories
 */

import LibraryCategoryPreview from "../components/LibraryCategoryPreview";
import { ImBooks } from "react-icons/im";

const Library = () => {
    return (
        <div>
            <div className="relative flex items-center justify-center
                            h-5 mb-5 bg-neutral-800 drop-shadow-md">
                <h1 className="font-lato font-bold text-xs flex justify-center items-center gap-2">{<ImBooks size="10" />} Library</h1>
            </div>

            <div>
                <LibraryCategoryPreview category="Want To Play" dbCategory="want_to_play" />
                <LibraryCategoryPreview category="Playing" dbCategory="playing" />
                <LibraryCategoryPreview category="Beaten" dbCategory="beaten" />
                <LibraryCategoryPreview category="On Hold" dbCategory="on_hold" />
                <LibraryCategoryPreview category="Abandoned" dbCategory="abandoned" />
            </div>

        </div>
    )
}

export default Library;
