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

const NavigationBarSignedIn = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <NavLink
                  to="/"
                  className="grid w-[280px] gap-3 p-4 md:w-[280px] md:grid-cols-2 lg:w-[280px]"
                >
                  Home
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About US</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="">
                <NavLink
                  to="/about"
                  className="grid w-[280px] gap-3 p-4 md:w-[280px] md:grid-cols-2 lg:w-[280px]"
                >
                  About
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="">
                <NavLink
                  to="/documentation"
                  className="grid w-[280px] gap-3 p-4 md:w-[280px] md:grid-cols-2 lg:w-[280px]"
                >
                  Documentation
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="">
                <NavLink
                  to="/dashboard"
                  className="grid w-[280px] gap-3 md:ml-10 p-4 md:w-[280px] md:grid-cols-2 lg:w-[280px]"
                >
                  Dashboard
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationBarSignedIn;
