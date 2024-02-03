/* eslint-disable react/jsx-key */
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

function Navigation() {
  const Links = [
    { Name: "Home", Path: "/", key: 1 },
    { Name: "About", Path: "#about", key: 2 },
    { Name: "Gallery", Path: "#gallery", key: 3 },
    { Name: "Shop", Path: "/shop", key: 4 },
    { Name: "Contact", Path: "#contact", key: 4 },
  ];

  const [open, setopen] = useState(false);
  const toggelmenu = () => {
    setopen((prevopen) => !prevopen);
  };
  const MenuDrop = {
    initial: { scaleY: 0 },
    animate: { scaleY: 1, transition: { duration: 0.2 } },
    exit: { scaleY: 0, transition: { duration: 1 } },
  };

  const [change, setchange] = useState(false);

  const ChangeColor = () => {
    if (window.scrollY >= 80) {
      setchange(true);
    } else {
      setchange(false);
    }
  };

  window.addEventListener("scroll", ChangeColor);

  return (
    <>
      <div className="fixed w-full z-10">
        {open && (
          <motion.div
            className="w-full h-[70vh] md:h-[60vh] absolute  darkred bg-black/50 backdrop-blur-[7px] origin-top pt-20"
            variants={MenuDrop}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ul className="text-5xl font-extrabold text-center mt-10 space-y-5 ">
              {Links.map((link) => (
                <li>
                  <Link
                    className="relative tracking-[2px] text-white  hover:text-white navLink"
                    to={link.Path}
                  >
                    {link.Name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>

      <nav
        className={
          change
            ? "h-[5rem] bg-white text-neutral-800 fixed w-full z-10 duration-500"
            : "h-0"
        }
      >
        <div className="flex justify-center  mx-auto ">
          <h1 className="text-neutral-800 text-4xl font-extrabold  z-10 absolute left-0 bottom-[1.5rem] pl-10">
            Logo
          </h1>
          <div className="hidden w-full md:block md:w-auto ">
            <ul className="link-color  text-2xl font-medium flex flex-col p-4 md:p-0 mt-6 md:flex-row md:space-x-8">
              {Links.map((link) => (
                <li>
                  <Link
                    className="relative tracking-[2px]  hover:text-text-black navLink"
                    smooth
                    to={link.Path}
                  >
                    {link.Name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <CgMenuRight
            className="text-neutral-800 z-10  absolute md:left-[96%] left-[90%] mt-6 cursor-pointer "
            size={"30px"}
            onClick={toggelmenu}
          />
        </div>
      </nav>
    </>
  );
}

export default Navigation;
