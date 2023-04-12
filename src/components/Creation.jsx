import "./creation.css";
import earthDekstop from "../images/desktop/image-deep-earth.jpg";
import earthMobile from "../images/mobile/image-deep-earth.jpg";
import arcadeDesktop from "../images/desktop/image-night-arcade.jpg";
import arcadeMobile from "../images/mobile/image-night-arcade.jpg";
import soccerDesktop from "../images/desktop/image-soccer-team.jpg";
import soccerMobile from "../images/mobile/image-soccer-team.jpg";
import gridDesktop from "../images/desktop/image-grid.jpg";
import gridMobile from "../images/mobile/image-grid.jpg";
import aboveDesktop from "../images/desktop/image-from-above.jpg";
import aboveMobile from "../images/mobile/image-from-above.jpg";
import pocketDesktop from "../images/desktop/image-pocket-borealis.jpg";
import pocketMobile from "../images/mobile/image-pocket-borealis.jpg";
import curiosityDesktop from "../images/desktop/image-curiosity.jpg";
import curiosityMobile from "../images/mobile/image-curiosity.jpg";
import fisheyeDesktop from "../images/desktop/image-fisheye.jpg";
import fisheyeMobile from "../images/mobile/image-fisheye.jpg";

const Creation = () => {
  return (
    <div className="creation-container">
      <div className="creation-header">
        <h2>OUR CREATION</h2>
        <button>SEE ALL</button>
      </div>
      <div className="creation-card">
        <div className="card">
          <img src={earthDekstop} alt="" />
          <img src={earthMobile} className="mobile-image" alt="" />
          <h3>DEEP EARTH</h3>
        </div>

        <div className="card">
          <img src={arcadeDesktop} alt="" />
          <img src={arcadeMobile} className="mobile-image" alt="" />
          <h3>NIGHT ARCADE</h3>
        </div>

        <div className="card">
          <img src={soccerDesktop} alt="" />
          <img src={soccerMobile} className="mobile-image" alt="" />
          <h3>SOCCER TEAM VR</h3>
        </div>

        <div className="card">
          <img src={gridDesktop} alt="" />
          <img src={gridMobile} className="mobile-image" alt="" />
          <h3>
            THE <br /> GRID
          </h3>
        </div>

        <div className="card">
          <img src={aboveDesktop} alt="" />
          <img src={aboveMobile} className="mobile-image" alt="" />
          <h3>FROM UP ABOVE VR</h3>
        </div>

        <div className="card">
          <img src={pocketDesktop} alt="" />
          <img src={pocketMobile} className="mobile-image" alt="" />
          <h3>POCKET BOREALIS</h3>
        </div>

        <div className="card">
          <img src={curiosityDesktop} alt="" />
          <img src={curiosityMobile} className="mobile-image" alt="" />
          <h3>THE CURIOSITY</h3>
        </div>

        <div className="card">
          <img src={fisheyeDesktop} alt="" />
          <img src={fisheyeMobile} className="mobile-image" alt="" />
          <h3>MAKE IT FISHEYE</h3>
        </div>
        <button className="mobile-btn">SEE ALL</button>
      </div>
    </div>
  );
};
export default Creation;
