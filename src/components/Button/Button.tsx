import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ButtonProps {
  title?: string;
  to?: string;
  icon?: IconProp;
  children?: ButtonProps;
}

const Button = ({ title, to = "", icon, children }: ButtonProps) => {
  const location = useLocation();

  // Normalize pathname and support nested route matching
  const currentPath = location.pathname.replace(/^\//, "");
  const targetPath = to.replace(/^\//, "");
  const isActive = currentPath === targetPath || currentPath.startsWith(targetPath + "/");

  const classes = clsx(
    "flex items-center gap-2 text-sm px-3 py-3 w-[180px] rounded-xl transition-all duration-300 ease-in-out",
    isActive
      ? "bg-gradient-to-r from-[#E21C34] to-[#500B28] text-[#fff]"
      : "text-[#E21C34] hover:text-[#fff] hover:bg-gradient-to-r from-[#E21C34] to-[#500B28]",
    icon && "justify-start"
  );

  const Comp = to ? Link : "button";

  return (
    <Comp {...(to ? { to } : {})} className={classes}>
      {icon && <FontAwesomeIcon icon={icon} className="text-xl" />}
      {children}
      {title}
    </Comp>
  );
};

export default Button;
