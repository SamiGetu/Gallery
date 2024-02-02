/* eslint-disable react/prop-types */
import Socials from "./socials";

export default function Hero(props) {
  return (
    <>
      <Socials />
      <div className={props.style}>
        <div className={props.Hero_layout}>
          <h1 className="text-7xl  font-bold">{props.Hero_H1}</h1>
          <p className="text-2xl pb-10">{props.Hero_P}</p>
          {props.Button}
        </div>
      </div>
    </>
  );
}
