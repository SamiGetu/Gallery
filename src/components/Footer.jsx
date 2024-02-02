import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialYoutube,
} from "react-icons/ti";
import { Link } from "react-router-dom";

function Footer() {
  const Links = [
    { Name: "Home", Path: "/", key: 1 },
    { Name: "About", Path: "/about", key: 2 },
    { Name: "Gallery", Path: "/gallery", key: 3 },
    { Name: "Contact", Path: "/contact", key: 4 },
  ];

  const FooterLink = Links.map((link) => (
    // eslint-disable-next-line react/jsx-key
    <li className="cursor-pointer  relative navLink hover:text-black">
      <Link
        className="relative tracking-[2px] text-neutral-900 font-semibold text-md  hover:text-black navLink"
        to={link.Path}
      >
        {link.Name}
      </Link>
    </li>
  ));
  return (
    <>
      <footer className="bg-white   ">
        <div className=" p-4 py-6 lg:py-8">
          <div className=" space-y-[3rem]">
            <div className="flex text-2xl text-neutral-900 hover:text-black gap-5 mt-4 sm:justify-center sm:mt-0 space-x-3">
              <div className="border border-neutral-800 rounded-full">
                <TiSocialFacebook size={"40px"} />
              </div>
              <div className="border border-neutral-800 rounded-full">
                <TiSocialTwitter size={"40px"} />
              </div>
              <div className="border border-neutral-800 rounded-full">
                <TiSocialLinkedin size={"40px"} />
              </div>
              <div className="border border-neutral-800 rounded-full">
                <TiSocialYoutube size={"40px"} />
              </div>
            </div>
            <div>
              <ul className="flex items-center justify-center space-x-5">
                {FooterLink}
              </ul>
            </div>
            <hr className=" border-neutral-400 w-[80%] absolute left-[10%]" />
          </div>
        </div>
        <h1 className="text-black text-md font-medium flex justify-center p-[3.5rem]">
          Copyright © 2023 Website By Ennovix
        </h1>
      </footer>
    </>
  );
}

export default Footer;
