import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import NavigationBar from "./NavigationBar";
import NavigationBarSignedIn from "./NavigationBarSignedIn";

const Documentation = () => {
  return (
    <div>
      <div className="w-[97.5vw] h-[100vh] md:w-[100%] bg-gradient-to-t from-white from-30% to-blue-200 to-70%">
        <nav className=" h-13 w-[100vw] md:h-18 shadow md:shadow-sm shadow-blue-65 md:shadow-blue-500/50">
          {/* <NavLink to="/"></NavLink> */}
          <div className="flex bg-white  justify-between">
            <div>
              <img
                className=" w-[75px] md:w-[95px] ml-2 md:ml-5 m-2"
                src="logos1.png"
                alt="logo"
              />
            </div>
            <div>
              <header>
                <div className="m-5 ">
                  <header>
                    <SignedOut>
                      <div className="flex">
                        <div>
                          <NavigationBar />
                        </div>
                        <div className="text-black border border-black rounded-lg">
                          <SignInButton className="p-1 md:pl-3 md:pr-3 md:pt-2 md:pb-2" />
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
                  </header>
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
