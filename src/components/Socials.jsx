import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

function Socials() {
  return (
    <>
      <div className="flex fixed right-0 bottom-0 mr-[8rem] mb-[4rem] gap-14 z-10">
        <div className="w-[5px] h-[5px] text-black/50 hover:text-red-600 rounded-2xl">
          <RiInstagramFill size={"40px"} />
        </div>
        <div className="w-[5px] h-[5px] text-black/50 hover:text-blue-900 rounded-2xl">
          <FaFacebookSquare size={"40px"} />
        </div>
        <div className="w-[5px] h-[5px] text-black/50 hover:text-blue-600  rounded-2xl">
          <FaLinkedin size={"40px"} />
        </div>
      </div>
    </>
  );
}

export default Socials;
