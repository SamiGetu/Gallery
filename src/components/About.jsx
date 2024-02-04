import Button from "./Button";

const About = () => {
  return (
    <>
      <div id="about">
        <h1 className="text-5xl bg-gray-100 text-neutral-800 pl-[5rem] pt-10   font-bold  ">
          About<span className="text-7xl p-2 text-yellow-300">.</span>
        </h1>
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="max-w-6xl mx-auto p-8 rounded-lg ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
              <div className="md:order-2">
                <div className="w-[25rem] h-[35rem] rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500 grayscale-[] hover:grayscale-0 bg-[url('images/her.webp')] bg-no-repeat bg-cover bg-center "></div>
              </div>
              <div className="md:order-1 flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-gray-400 ">
                  Welcome to My Story
                  <hr />
                </h1>
                <p className="text-gray-800 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium distinctio saepe mollitia cupiditate aspernatur
                  soluta eius nam neque architecto amet, quidem, veniam a animi
                  quam tempore est qui necessitatibus minus doloremque. Atque,
                  placeat soluta impedit veniam minima nihil dicta delectus.
                </p>
                <p className="text-gray-800 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat eligendi consequatur illum soluta eaque, vel esse
                  sunt praesentium necessitatibus velit.
                </p>
                <p className="text-gray-800 mb-12">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Saepe, corrupti!
                </p>
                <Button
                  text={"More"}
                  style={
                    "absolute mt-[30rem] bg-black  text-white font-semibold py-3 px-16 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 "
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
