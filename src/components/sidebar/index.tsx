import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";
  const isContactPage = pathname === "/contact";
  const isChartAndMapsPage = pathname === "/charts-and-maps";

  const isActiveClass = "underline font-bold text-black";

  return (
    <div className="md:w-[25%] w-full flex md:flex-col flex-row md:justify-start justify-between md:items-start items-center md:max-w-[25%] bg-[rgb(251,211,99)] md:h-[100dvh] h-auto md:fixed relative md:p-6 p-2 ">
      <img
        src="https://taiyo.ai/wp-content/uploads/Taiyo-logo.png"
        alt="logo"
        className="w-auto md:h-12 h-6"
      />
      <div className="flex md:flex-col flex-row gap-6 text-white font-medium md:my-10 my-4 md:text-2xl text-sm">
        <Link className={`${isHomePage ? isActiveClass : ""}`} to={"/"}>
          Home
        </Link>
        <Link
          className={`${isContactPage ? isActiveClass : ""}`}
          to={"/contact"}
        >
          Contact
        </Link>
        <Link
          className={`${isChartAndMapsPage ? isActiveClass : ""}`}
          to={"/charts-and-maps"}
        >
          Charts and Maps
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
