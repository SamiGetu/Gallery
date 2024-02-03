import Navigation from "../Navigation";
import Hero from "../Hero";
import Card from "../GalleryCard";
import Footer from "../Footer";

function Mgallery() {
  return (
    <>
      <Navigation />
      <Hero
        Hero_layout="flex flex-col items-center  pt-[20rem] text-white"
        Hero_H1="Gallery"
        style="h-[60vh] w-full bg-[url('images/hero3.webp')]   bg-no-repeat bg-cover bg-center bg-fixed"
      />
      <div className="bg-[url('images/BG.webp')] bg-center bg-cover bg-fixed pb-[20rem]">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
}

export default Mgallery;
