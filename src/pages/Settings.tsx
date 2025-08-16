/**
 * Settings Page
 * Route - redirects from hitting settings button on navbar
 *
 * Allows the user to change various settings
 */

import { IoIosSettings } from "react-icons/io";

const Settings = () => {
  return (
    <div>
      <div
        className="relative flex items-center justify-center
                            h-5 mb-5 bg-neutral-800 drop-shadow-md"
      >
        <h1 className="font-lato font-bold text-xs flex justify-center items-center gap-2">
          {<IoIosSettings size="12" />} Settings
        </h1>
      </div>
    </div>
  );
};

export default Settings;
