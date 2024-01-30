import environmentImg from "../images/unsplash_KdeqA3aTnBY.png";
import teamImg from "../images/unsplash_Oalh2MojUuk.png";
import "./about.css";

export default function About() {
  return (
    <>
      <div className="head">
        <h1>
          Get to know <span id="commonColor">us</span>
        </h1>
      </div>

      <div className="container">
        <div>
          <img id="divId" className="abouImg" src={teamImg} alt="Team Work" />
        </div>

        <div id="divId">
          <h2>
            <span id="commonColor">Teamwork</span> is the key to our sucess
          </h2>
          <p>
            At TasteNow we make sure that every decision is determined by a team
            of us. Everyone´s opinion matters, and as group, we are stronger. We
            firmly belive that team work, makes the dream work.
          </p>
        </div>
        <div id="divId">
          <h2>
            We are all in for the <span id="commonColor">enviroment</span>
          </h2>
          <p>
            TasteNow donates $1 penny for every purchase made from the app to an
            organization that takes care of our enviromet. We belive that with
            everyone´s help, we can make a better world.{" "}
          </p>
        </div>
        <div>
          <img id="divId" className="abouImg" src={environmentImg} alt="Envinorment" />
        </div>
      </div>
    </>
  );
}
