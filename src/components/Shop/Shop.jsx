import Navigation from "../Navigation";
import Hero from "../Hero";
import ShopingCard from "../ShopingCard";
import Footer from "../Footer";
import Button from "../Button";

function Shop() {
  return (
    <>
      <Navigation />
      <Hero
        Hero_layout="flex flex-col items-center  pt-[15rem] text-white"
        Hero_H1="Shop"
        style="h-[50vh] w-full bg-[url('/images/hero3.webp')] bg-no-repeat bg-cover bg-center bg-fixed"
      />

      <div className="flex flex-wrap justify-center gap-10 ">
        <ShopingCard
          image="images/hero3.webp"
          effect="absolute w-full h-full bg-white/80 flex items-center justify-center -bottom-[40rem] group-hover:bottom-[-10rem]  opacity-0  group-hover:opacity-100 transition-all duration-700"
          price={" 25$"}
          desc="DESCRIBTION"
          name="NEW PAINT"
          size="bg-gray-100 w-[20rem] h-[25rem] relative overflow-hidden flex justify-center items-center"
          imgSize="w-[16rem] h-[18rem]  object-cover "
          button={
            <Button
              text="Detail"
              style="text-black hover:underline  font-bold   mb-[15rem] "
            />
          }
        />
        <ShopingCard
          image="images/hero2.webp"
          effect="absolute w-full h-full bg-white/80 flex items-center justify-center -bottom-[40rem] group-hover:bottom-[-10rem]  opacity-0  group-hover:opacity-100 transition-all duration-700"
          price={" 25$"}
          desc="DESCRIBTION"
          name="NEW PAINT"
          size="bg-gray-100 w-[20rem] h-[25rem] relative overflow-hidden flex justify-center items-center"
          imgSize="w-[16rem] h-[18rem]  object-cover "
          button={
            <Button
              text="Detail"
              style="text-black hover:underline  font-bold   mb-[15rem] "
            />
          }
        />
        <ShopingCard
          image="images/BG.webp"
          effect="absolute w-full h-full bg-white/80 flex items-center justify-center -bottom-[40rem] group-hover:bottom-[-10rem]  opacity-0  group-hover:opacity-100 transition-all duration-700"
          price={" 25$"}
          desc="DESCRIBTION"
          name="NEW PAINT"
          size="bg-gray-100 w-[20rem] h-[25rem] relative overflow-hidden flex justify-center items-center"
          imgSize="w-[16rem] h-[18rem]  object-cover "
          button={
            <Button
              text="Detail"
              style="text-black hover:underline  font-bold   mb-[15rem] "
            />
          }
        />
      </div>
      {/*  */}
      <div className="flex flex-wrap justify-center gap-10 ">
        <ShopingCard
          image="images/gallery.webp"
          effect="absolute w-full h-full bg-white/80 flex items-center justify-center -bottom-[40rem] group-hover:bottom-[-10rem]  opacity-0  group-hover:opacity-100 transition-all duration-700"
          price={" 25$"}
          desc="DESCRIBTION"
          name="NEW PAINT"
          size="bg-gray-100 w-[20rem] h-[25rem] relative overflow-hidden flex justify-center items-center"
          imgSize="w-[16rem] h-[18rem]  object-cover "
          button={
            <Button
              text="Detail"
              style="text-black hover:underline  font-bold   mb-[15rem] "
            />
          }
        />
        <ShopingCard
          image="images/hero.webp"
          effect="absolute w-full h-full bg-white/80 flex items-center justify-center -bottom-[40rem] group-hover:bottom-[-10rem]  opacity-0  group-hover:opacity-100 transition-all duration-700"
          price={" 25$"}
          desc="DESCRIBTION"
          name="NEW PAINT"
          size="bg-gray-100 w-[20rem] h-[25rem] relative overflow-hidden flex justify-center items-center"
          imgSize="w-[16rem] h-[18rem]  object-cover "
          button={
            <Button
              text="Detail"
              style="text-black hover:underline  font-bold   mb-[15rem] "
            />
          }
        />
        <ShopingCard
          image="images/gallery.webp"
          effect="absolute w-full h-full bg-white/80 flex items-center justify-center -bottom-[40rem] group-hover:bottom-[-10rem]  opacity-0  group-hover:opacity-100 transition-all duration-700"
          price={" 25$"}
          desc="DESCRIBTION"
          name="NEW PAINT"
          size="bg-gray-100 w-[20rem] h-[25rem] relative overflow-hidden flex justify-center items-center"
          imgSize="w-[16rem] h-[18rem]  object-cover "
          button={
            <Button
              text="Detail"
              style="text-black hover:underline  font-bold   mb-[15rem] "
            />
          }
        />
      </div>
      {/*  */}

      {/*  */}
      <div className="flex flex-wrap justify-center gap-10 ">
        <ShopingCard
          image="images/hero2.webp"
          effect="absolute w-full h-full bg-white/80 flex items-center justify-center -bottom-[40rem] group-hover:bottom-[-10rem]  opacity-0  group-hover:opacity-100 transition-all duration-700"
          price={" 25$"}
          desc="DESCRIBTION"
          name="NEW PAINT"
          size="bg-gray-100 w-[20rem] h-[25rem] relative overflow-hidden flex justify-center items-center"
          imgSize="w-[16rem] h-[18rem]  object-cover "
          button={
            <Button
              text="Detail"
              style="text-black hover:underline  font-bold   mb-[15rem] "
            />
          }
        />
        <ShopingCard
          image="images/BG.webp"
          effect="absolute w-full h-full bg-white/80 flex items-center justify-center -bottom-[40rem] group-hover:bottom-[-10rem]  opacity-0  group-hover:opacity-100 transition-all duration-700"
          price={" 25$"}
          desc="DESCRIBTION"
          name="NEW PAINT"
          size="bg-gray-100 w-[20rem] h-[25rem] relative overflow-hidden flex justify-center items-center"
          imgSize="w-[16rem] h-[18rem]  object-cover "
          button={
            <Button
              text="Detail"
              style="text-black hover:underline  font-bold   mb-[15rem] "
            />
          }
        />
        <ShopingCard
          image="images/gallery.webp"
          effect="absolute w-full h-full bg-white/80 flex items-center justify-center -bottom-[40rem] group-hover:bottom-[-10rem]  opacity-0  group-hover:opacity-100 transition-all duration-700"
          price={" 25$"}
          desc="DESCRIBTION"
          name="NEW PAINT"
          size="bg-gray-100 w-[20rem] h-[25rem] relative overflow-hidden flex justify-center items-center"
          imgSize="w-[16rem] h-[18rem]  object-cover "
          button={
            <Button
              text="Detail"
              style="text-black hover:underline  font-bold   mb-[15rem] "
            />
          }
        />
      </div>
      {/*  */}
      <div className="flex flex-wrap justify-center gap-10 ">
        <ShopingCard
          image="images/paint.webp"
          effect="absolute w-full h-full bg-white/80 flex items-center justify-center -bottom-[40rem] group-hover:bottom-[-10rem]  opacity-0  group-hover:opacity-100 transition-all duration-700"
          price={" 25$"}
          desc="DESCRIBTION"
          name="NEW PAINT"
          size="bg-gray-100 w-[20rem] h-[25rem] relative overflow-hidden flex justify-center items-center"
          imgSize="w-[16rem] h-[18rem]  object-cover "
          button={
            <Button
              text="Detail"
              style="text-black hover:underline  font-bold   mb-[15rem] "
            />
          }
        />
        <ShopingCard
          image="images/hero3.webp"
          effect="absolute w-full h-full bg-white/80 flex items-center justify-center -bottom-[40rem] group-hover:bottom-[-10rem]  opacity-0  group-hover:opacity-100 transition-all duration-700"
          price={" 25$"}
          desc="DESCRIBTION"
          name="NEW PAINT"
          size="bg-gray-100 w-[20rem] h-[25rem] relative overflow-hidden flex justify-center items-center"
          imgSize="w-[16rem] h-[18rem]  object-cover "
          button={
            <Button
              text="Detail"
              style="text-black hover:underline  font-bold   mb-[15rem] "
            />
          }
        />
        <ShopingCard
          image="images/gallery.webp"
          effect="absolute w-full h-full bg-white/80 flex items-center justify-center -bottom-[40rem] group-hover:bottom-[-10rem]  opacity-0  group-hover:opacity-100 transition-all duration-700"
          price={" 25$"}
          desc="DESCRIBTION"
          name="NEW PAINT"
          size="bg-gray-100 w-[20rem] h-[25rem] relative overflow-hidden flex justify-center items-center"
          imgSize="w-[16rem] h-[18rem]  object-cover "
          button={
            <Button
              text="Detail"
              style="text-black hover:underline  font-bold   mb-[15rem] "
            />
          }
        />
      </div>
      {/*  */}
      <div className="flex flex-wrap justify-center gap-10 ">
        <ShopingCard
          image="images/paint.webp"
          effect="absolute w-full h-full bg-white/80 flex items-center justify-center -bottom-[40rem] group-hover:bottom-[-10rem]  opacity-0  group-hover:opacity-100 transition-all duration-700"
          price={" 25$"}
          desc="DESCRIBTION"
          name="NEW PAINT"
          size="bg-gray-100 w-[20rem] h-[25rem] relative overflow-hidden flex justify-center items-center"
          imgSize="w-[16rem] h-[18rem]  object-cover "
          button={
            <Button
              text="Detail"
              style="text-black hover:underline  font-bold   mb-[15rem] "
            />
          }
        />
        <ShopingCard
          image="images/hero3.webp"
          effect="absolute w-full h-full bg-white/80 flex items-center justify-center -bottom-[40rem] group-hover:bottom-[-10rem]  opacity-0  group-hover:opacity-100 transition-all duration-700"
          price={" 25$"}
          desc="DESCRIBTION"
          name="NEW PAINT"
          size="bg-gray-100 w-[20rem] h-[25rem] relative overflow-hidden flex justify-center items-center"
          imgSize="w-[16rem] h-[18rem]  object-cover "
          button={
            <Button
              text="Detail"
              style="text-black hover:underline  font-bold   mb-[15rem] "
            />
          }
        />
        <ShopingCard
          image="images/gallery.webp"
          effect="absolute w-full h-full bg-white/80 flex items-center justify-center -bottom-[40rem] group-hover:bottom-[-10rem]  opacity-0  group-hover:opacity-100 transition-all duration-700"
          price={" 25$"}
          desc="DESCRIBTION"
          name="NEW PAINT"
          size="bg-gray-100 w-[20rem] h-[25rem] relative overflow-hidden flex justify-center items-center"
          imgSize="w-[16rem] h-[18rem]  object-cover "
          button={
            <Button
              text="Detail"
              style="text-black hover:underline  font-bold   mb-[15rem] "
            />
          }
        />
      </div>

      <Footer />
    </>
  );
}

export default Shop;
