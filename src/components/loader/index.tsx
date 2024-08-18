const Loader = () => {
  return (
    <div className="absolute top-0 left-0 bottom-0 flex items-center justify-center h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.3)] z-30">
      <div className="h-[60px] w-[60px] border-[5px] border-[#EAF0F6] rounded-full border-t-black animate-spin"></div>
    </div>
  );
};

export default Loader;
