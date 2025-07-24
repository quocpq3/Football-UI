import { Link , useLocation} from "react-router-dom";
import clsx from "clsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Button = function ({ title ='',to='', icon, leagues = false, logoLegues = false }) {
    const location = useLocation();
    const isActive = location.pathname === (to === '/' ? '/' : `/${to}`);
    let Comp = 'button';

    if(to) {
        Comp = Link;
    }
  const classes = clsx(
    'flex items-center gap-2',
    isActive ? ' bg-[#4462ee] text-[#fff] px-8 py-4 rounded-2xl font-semibold '
    : ' text-[#000] px-8 py-3 rounded-2xl font-medium hover: hover:text-[#4462ee] transition-all duration-300 ease-in-out',
    leagues&& 'bg-[#4462ee] w-full h-[40px] cursor-pointer pl-4 flex items-center gap-2 text-[#fff]',
    icon && 'items-center justify-center',
  )

  return (
    <Comp 
    to={to} 
    className={classes}
    > 
      <FontAwesomeIcon icon={icon} className="text-xl"/>
         {leagues && logoLegues && (
                <img src={logoLegues} alt={title} className="w-[30px] h-[30px]" />
            )}
      {title}
    </Comp>
  );
}

export default Button;