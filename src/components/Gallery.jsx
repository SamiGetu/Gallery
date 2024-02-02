import Card from "./Card";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold p-[5rem] text-neutral-800">
          Gallery<span className="text-7xl p-2 text-yellow-300">.</span>
        </h1>
        <Card />

        <div className="p-10 ml-14">
          <Link to="/gallery">
            <Button
              text="View More"
              txtstyle={"relative z-10 text-2xl"}
              style={
                "relative overflow-hidden  font-semibold py-3 px-16 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 transform transition-transform duration-300 hover:scale-105 hover:text-yellow-300 mt-5"
              }
              icons={<FaArrowRight />}
              iconsStyle={"text-3xl fixed right-0 "}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Gallery;
