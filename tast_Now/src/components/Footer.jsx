import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import logo from "../images/logo2.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";

import "./footer.css";
export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="logoDiv">
        <div className="footerLogo">
          <img id="footerImg" src={logo} />
        </div>
        <div>
          <ul className="unorderList">
            <li>
              <img src={facebook} />
            </li>
            <li>
              <img src={instagram} />
            </li>
            <li>
              <img src={twitter} />
            </li>
            <li>
              <img src={youtube} />
            </li>
          </ul>
        </div>
      </div>
      <div>
      <ul className="footerList">
          <li>Seslendirme ve Alt Jazz</li>
          <li>Media Market</li>
          <li>Gillie</li>
          <li>Size Last</li>
        </ul>
      </div>
      <div>
      <ul className="footerList">
          <li>Self Betimes</li>
          <li>Yatırımcı İlişkileri</li>
          <li>Basal Himmler</li>
        </ul>
      </div>
      <div>
      <ul className="footerList">
          <li>Yard Market</li>
          <li>Is İmkanları</li>
          <li>Gillie</li>
          <li>Car Tercihleri</li>
        </ul>
      </div>
      <div>
      <ul className="footerList">
          <li>Hedge Karla</li>
          <li>Mullein Koşulları</li>
          <li>Gillie</li>
          <li>Autumnal Bulgier</li>
        </ul>
      </div>
    </div>
  );
}
