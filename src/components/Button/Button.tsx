import { Link , useLocation} from "react-router-dom";
import clsx from "clsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps {
  title?: string;
  to?: string;
  icon?: IconProp;
  leagues?: boolean;
  logoLegues?: boolean | string;
}

const Button = function ({ title ='',to='', icon, leagues = false, logoLegues = false }: ButtonProps) {
    const location = useLocation();
    const isActive = location.pathname === (to === '/' ? '/' : `/${to}`);
    let Comp: React.ElementType = 'button';

    if(to) {
        Comp = Link;
    }
  const classes = clsx(
    'flex items-center gap-2',
    isActive ? ' bg-[#4462ee] text-[#fff] px-8 py-4 rounded-2xl font-semibold '
    : ' text-[#000] px-8 py-3 rounded-2xl font-medium hover: hover:text-[#4462ee] transition-all duration-300 ease-in-out',
    leagues&& 'h-[40px] cursor-pointer flex items-center gap-2 text-[#000] text-[14px] font-semibold hover:bg-[#4462ee] hover:text-[#fff] transition-all duration-300 ease-in-out',
    icon && 'items-center justify-center',
  )

  return (
    <Comp
    {...(to ? { to } : {})}
    className={classes}
    > 
      {icon && <FontAwesomeIcon icon={icon} className="text-xl"/>}
         {leagues && logoLegues && (
                <img src={logoLegues as string} alt={title} className="w-[30px] h-[30px]" />
            )}
      {title}
    </Comp>
  );
}

export default Button;
