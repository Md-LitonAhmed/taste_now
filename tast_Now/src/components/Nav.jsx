import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/Taste now.svg'
import "./nav.css";

export default function Nav() {

  return (
    <>
      <div className="nav-main">
        <div>
        <img id="imgId" src={logo} alt="logo" />
        </div>

        <div>
          <ul className="listItem">
            <li className="nav-item">
              <a id="home" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#">About us</a>
            </li>
            <li className="nav-item">
              <a href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="shoppingCart">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div>
        <button className="btSingup">SignUp</button>
        </div>

      </div>

      <div>
        </div>
    </>
  );
}
