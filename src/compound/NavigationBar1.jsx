import { NavLink } from "react-router-dom";

const NavigationBar1 = () => {
  return (
    <>
      <NavLink to="/" className="grid  w-[280px] p-4 ">
        Home
      </NavLink>

      <NavLink
        to="/about"
        className="grid w-[280px] gap-3 p-4 md:w-[280px] md:grid-cols-2 lg:w-[280px]"
      >
        About our Site
      </NavLink>

      <NavLink
        to="/documentation"
        className="grid w-[280px] gap-3 p-4 md:w-[280px] md:grid-cols-2 lg:w-[280px]"
      >
        Documentation
      </NavLink>
    </>
  );
};

export default NavigationBar1;
