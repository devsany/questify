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
import { SignedIn, SignIn } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="">
                <NavLink
                  to="/"
                  className="grid w-[180px] gap-3 p-4 md:w-[180px] md:grid-cols-2 lg:w-[180px]"
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
                  className="grid w-[180px] gap-3 p-4 md:w-[180px] md:grid-cols-2 lg:w-[180px]"
                >
                  About our Site
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
                  className="grid w-[180px] gap-3 p-4 md:w-[180px] md:grid-cols-2 lg:w-[180px]"
                >
                  Documentation
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationBar;
