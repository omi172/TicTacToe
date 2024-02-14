import SpinningCross from "./spinningcross.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Header">
      <div className="RightHeader">
        <font Face="Monotype Corsiva" size="8">
          About Me
        </font>
      </div>
      <SpinningCross />
      <div className="LeftHeader">
        <font Face="Monotype Corsiva" size="8">
          <Link to="/contact">Contact Me</Link>
        </font>
      </div>
    </div>
  );
}
