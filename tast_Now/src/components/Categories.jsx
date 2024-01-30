import { dishesDetails } from "../Data";
import pizza from "../images/Group 3172.png";
import burger from '../images/Group.png';
import Salads from '../images/Vector (3).png';
import Combos from '../images/Group 3169.png';
import Cart from "./Cart";
import "./categories.css";
export default function Categories() {
  return (
    <div className="top">
      <h2>
        Our Populer <span id="commonColor">Categories</span>
      </h2>
      <div className="btnGroup">

        <div className="title pizz">
          <img id="smLogo" src={pizza} />
          <h4>Pizzas</h4>
        </div>

        <div className="title">
        <img id="smLogo" src={burger} />
          <h4 id="commonColor">Burgers</h4>
        </div>
        <div className="title">
        <img id="smLogo" src={Salads} />
          <h4 id="commonColor">Salads</h4>
        </div>
        <div className="title">
        <img id="smLogo" src={Combos} />
          <h4 id="commonColor">Combos</h4>
          </div>
      </div>
      <div className="cartContainer">
        {dishesDetails.map((data) => (
          <Cart data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}
