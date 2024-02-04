import PropTypes from "prop-types";

const Hero = ({ style, Hero_H1, Hero_layout, Hero_P, Button }) => {
  return (
    <>
      <div className={style}>
        <div className={Hero_layout}>
          <h1 className="text-7xl font-bold">{Hero_H1}</h1>
          <p className="text-2xl pb-10">{Hero_P}</p>
          {Button}
        </div>
      </div>
    </>
  );
};

Hero.propTypes = {
  style: PropTypes.string.isRequired,
  Hero_H1: PropTypes.string.isRequired,
  Hero_layout: PropTypes.string.isRequired,
  Hero_P: PropTypes.string.isRequired,
  Button: PropTypes.element.isRequired,
};

export default Hero;
