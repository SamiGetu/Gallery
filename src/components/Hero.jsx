/* eslint-disable react/prop-types */
import Socials from "./socials";

const Hero = ({ style, Hero_H1, Hero_layout, Hero_P, Button }) => {
  return (
    <>
      <Socials />
      <div className={style}>
        <div className={Hero_layout}>
          <h1 className="text-7xl  font-bold">{Hero_H1}</h1>
          <p className="text-2xl pb-10">{Hero_P}</p>
          {Button}
        </div>
      </div>
    </>
  );
};

export default Hero;
