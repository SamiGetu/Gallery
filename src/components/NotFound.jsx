import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <Link className="text-white absolute text-2xl p-10 font-extrabold" to="/">
        Logo
      </Link>
      <div className="w-full h-screen bg-black flex flex-col justify-center items-center">
        <h1 className="text-[10rem] text-white text-center font-extrabold">
          404
        </h1>
        <h2 className="text-2xl">Page Not Found</h2>
      </div>
    </>
  );
}

export default NotFound;
