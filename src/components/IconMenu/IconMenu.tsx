import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IconMenuProps {
  icon: IconProp;
}

const IconMenu = function ({icon}: IconMenuProps) {
    return ( 
        <div className="h-[35px]  w-[35px] border  border-[#b0b0b0] rounded-[8px] flex items-center justify-center cursor-pointer hover:bg-[#4462ee] transition-all duration-300">
            <FontAwesomeIcon icon={icon} className="text-[#525151] text-[20px] p-2 hover:text-[#fff]" />
        </div>
     );
}

export default IconMenu;
