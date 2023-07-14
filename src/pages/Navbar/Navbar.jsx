import { HashLink as NavLink } from "react-router-hash-link";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Navbar = () => {
  const navbarContent = (
    <>
      <li>
        <NavLink
          to="#"
          smooth
          className="mb-1 lg:mb-0 lg:mr-1 link link-hover font-belano"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          &lt;Home&#47;&gt;
        </NavLink>
      </li>

      <li>
        <NavLink
          to="#about"
          smooth
          className="mb-1 lg:mb-0 lg:mr-1 link link-hover font-belano"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          &lt;About Me&#47;&gt;
        </NavLink>
      </li>

      <li>
        <NavLink
          to="#skills"
          smooth
          className="mb-1 lg:mb-0 lg:mr-1 link link-hover font-belano"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          &lt;Skills&#47;&gt;
        </NavLink>
      </li>

      <li>
        <NavLink
          to="#projects"
          smooth
          className="link link-hover font-belano"
          data-aos="fade-left"
          data-aos-duration="2500"
          data-aos-easing="ease-in-out"
        >
          &lt;Projects&#47;&gt;
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="container bg-white navbar fixed z-10 dark:bg-[#0A0A0A]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded w-52"
          >
            {navbarContent}
          </ul>
        </div>

        <a className="btn btn-ghost normal-case text-xl font-belano">
          &lt;Sayon Usman&#47;&gt;
        </a>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbarContent}</ul>
      </div>
    </div>
  );
};

export default Navbar;
