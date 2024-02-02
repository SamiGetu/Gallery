/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
function ShopingCard(props) {
  return (
    <>
      <div className=" mt-10">
        <div className="group">
          <div className={props.size}>
            <img className={props.imgSize} src={props.image} alt="" />
            <div className={props.effect}>
              <Link to={"/Cart"}>{props.button}</Link>
            </div>
          </div>
          <h1 className="main text-md text-center">{props.name}</h1>
          <h2 className="text-black text-center font-semibold">{props.desc}</h2>
          <hr className="w-40 absolute ml-20" />
          <p className="text-neutral-500 text-lg text-center font-semibold">
            {props.price}
          </p>
        </div>
      </div>
    </>
  );
}

export default ShopingCard;
