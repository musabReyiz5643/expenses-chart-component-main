import logo from "./images/logo.svg";

const Above_part = () => {
  return (
    <>
      <div className="w-full h-auto p-5 bg-[hsl(10,79%,65%)] flex items-center justify-between rounded-2xl">
        <div className="flex items-start flex-col justify-center gap-2 ">
          <p className="DM_Sans_Family-400 text-white ">My balance</p>
          <p className="DM_Sans_Family-700 text-white text-3xl ">$921.48</p>
        </div>
        <div className="flex items-center justify-center">
          <img src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Above_part;
