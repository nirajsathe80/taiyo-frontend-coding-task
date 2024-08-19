import Sidebar from "../components/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex md:flex-row flex-col">
      <div className="md:w-[25%] w-[100vw]">
        <Sidebar />
      </div>
      <div className="bg-[#efece3] min-h-[100vh]  md:w-[75%] w-full">
        {children}
      </div>
    </div>
  );
};

export default Layout;
