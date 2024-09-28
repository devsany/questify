import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";

const NavigationBarSignedIn1 = (props) => {
  console.log(props);
  return (
    <div>
      <NavLink to="/" className="grid border w-[280px] p-4  ">
        Home
      </NavLink>

      <NavLink
        to="/about"
        className="grid w-[280px] gap-3 p-4 md:w-[280px] md:grid-cols-2 lg:w-[280px]"
      > 
        About
      </NavLink>

      <NavLink
        to="/documentation"
        className="grid w-[280px] gap-3 p-4 md:w-[280px] md:grid-cols-2 lg:w-[280px]"
      >
        Documentation
      </NavLink>

      <NavLink
        to="/dashboard"
        className="grid w-[280px] gap-3 md:ml-10 p-4 md:w-[280px] md:grid-cols-2 lg:w-[280px]"
      >
        Dashboard
      </NavLink>
    </div>
  );
};

export default NavigationBarSignedIn1;
