import Button from "./Button";
import Hero from "./Hero";

function Home() {
  return (
    <>
      <div id="/">
        <Hero
          Hero_layout="flex flex-col items-center  pt-[25rem] text-white"
          Hero_H1="Welcome"
          Hero_P="im Artist ...."
          style="h-screen w-full bg-[url('images/hero.webp')] bg-no-repeat bg-cover bg-center bg-fixed"
          Button={
            <Button
              text="BUY NOW"
              style="px-14 py-3 bg-white "
              txtstyle={"text-md text-neutral-600 font-bold"}
            />
          }
        />
      </div>
    </>
  );
}

export default Home;
