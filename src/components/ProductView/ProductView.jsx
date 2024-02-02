import Navigation from "../Navigation";
import Hero from "../Hero";
import Footer from "../Footer";
import Button from "../Button";
import ShopingCard from "../ShopingCard";
import { FaShoppingCart } from "react-icons/fa";

const ProductComponent = () => {
  return (
    <>
      <Navigation />
      <Hero
        Hero_layout="flex flex-col items-center  pt-[20rem] text-white"
        Hero_H1="Detail Product"
        style="h-[70vh] w-full bg-[url('images/hero3.webp')]   bg-no-repeat bg-cover bg-center bg-fixed"
      />
      <div className="flex flex-wrap justify-center items-center gap-10">
        <div>
          <ShopingCard
            image="images/hero2.webp"
            size="w-[40rem] h-[35rem] bg-gray-100 flex justify-center items-center"
            imgSize="w-[35rem] h-[30rem] object-cover  "
          />
        </div>
        <div className=" space-y-4">
          <h1 className="text-3xl text-gray-500">Painting</h1>
          <h2 className="text-5xl text-black">Images Describtion</h2>
          <p className="text-black font-bold text-xl">
            1200 <span className="text-green-400 text-3xl">Birr</span>
          </p>

          <p className="text-black w-auto md:w-[40vw]">
            A painting that Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Distinctio ex totam facere sint assumenda nihil, quo modi enim
            corrupti obcaecati! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Aperiam, eligendi facere? Nisi quibusdam odio
            praesentium deserunt in minima ut placeat?
          </p>
          <div className="flex gap-6">
            <Button
              text={"Add to Cart"}
              style={
                "bg-black  text-white font-semibold py-2 px-10 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 "
              }
              iconsStyle="absolute ml-[6rem] mt-[5px] text-white "
              icons={<FaShoppingCart size={"15px"} />}
            />
            <Button
              text={"Go To Cart"}
              style={
                "bg-black  text-white font-semibold py-2 px-10 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 "
              }
            />
          </div>
        </div>
      </div>

      <div className=" flex flex-wrap justify-center items-center gap-10 mt-[10rem]">
        <ShopingCard
          image="images/hero3.webp"
          effect="absolute w-full h-full bg-white/80 flex items-center justify-center -bottom-[40rem] group-hover:bottom-[-10rem]  opacity-0  group-hover:opacity-100 transition-all duration-700"
          price={" 25$"}
          desc="DESCRIBTION"
          name="NEW PAINT"
          size="bg-gray-100 w-[20rem] h-[25rem] relative overflow-hidden flex justify-center items-center"
          imgSize="w-[16rem] h-[18rem]  object-cover "
          button={
            <Button text="Detail" style="text-black font-bold mb-[15rem] " />
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
            <Button text="Detail" style="text-black font-bold mb-[15rem] " />
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
            <Button text="Detail" style="text-black font-bold mb-[15rem] " />
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
            <Button text="Detail" style="text-black font-bold mb-[15rem] " />
          }
        />
      </div>
      <Footer />
    </>
  );
};

export default ProductComponent;
