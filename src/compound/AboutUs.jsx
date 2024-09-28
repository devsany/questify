import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import NavigationBar from "./NavigationBar";
import NavigationBarSignedIn from "./NavigationBarSignedIn";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavigationBar1 from "./NavigationBar1";
import NavigationBarSignedIn1 from "./NavigationBarSignedIn1";

const Documentation = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggel = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="w-[100vw] h-[100vh] md:w-[100%] bg-gradient-to-t from-white from-30% to-orange-100 to-70%">
        <nav className=" h-13 w-[100vw] md:h-18 shadow md:shadow-sm shadow-blue-65 md:shadow-orange-500/50">
          {/* <NavLink to="/"></NavLink> */}
          <div className="flex bg-white  justify-between">
            <div>
              <NavLink
                to="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img
                  // className="h-8"
                  className=" w-[75px] md:w-[95px] ml-2 md:ml-5 m-2"
                  src="logos1.png"
                  alt="logo"
                />
              </NavLink>
            </div>
            <div className="button">
              <button
                onClick={handleToggel}
                data-collapse-toggle="navbar-default"
                type="button"
                className=" absolute ml-[120px] mt-4 items-center p-2 w-10 h-10  text-sm text-gray-500 rounded-lg   md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div>
              <header>
                <div className="m-5 ">
                  {toggle ? (
                    <header>
                      <div className="block">
                        <SignedOut>
                          <div className="block">
                            <div>
                              <NavigationBar1 />
                            </div>
                            <div className="text-black  ">
                              <SignInButton className="p-1 ml-4 md:m-0 md:pl-3 md:pr-3 md:pt-2 md:pb-2" />
                            </div>
                          </div>
                        </SignedOut>
                        <SignedIn>
                          <div className="p-1 block   justify-between md:w-[500px] h-[40px]  ">
                            <div>
                              <NavigationBarSignedIn1 />
                            </div>
                            <div className=" m-4 ">
                              <UserButton />
                            </div>
                          </div>
                        </SignedIn>
                      </div>
                    </header>
                  ) : (
                    <header>
                      <div className="hidden md:block">
                        <SignedOut>
                          <div className="flex">
                            <div>
                              <NavigationBar />
                            </div>
                            <div className="text-black border border-black rounded-lg">
                              <SignInButton className="p-1  md:pl-3 md:pr-3 md:pt-2 md:pb-2" />
                            </div>
                          </div>
                        </SignedOut>
                        <SignedIn>
                          <div className="p-1 flex justify-between md:w-[500px] h-[40px]  ">
                            <div>
                              <NavigationBarSignedIn />
                            </div>
                            <div className="border rounded-3xl">
                              <UserButton />
                            </div>
                          </div>
                        </SignedIn>
                      </div>
                    </header>
                  )}
                </div>
              </header>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Documentation;
