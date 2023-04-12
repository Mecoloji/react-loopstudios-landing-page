import "./description.css";
import InteractiveImage from "../images/desktop/image-interactive.jpg";

const Description = () => {
  return (
    <div className="description-container">
      <div className="description-image">
        <img src={InteractiveImage} alt="" />
      </div>
      <div className="description-content">
        <h2>THE LEADER IN INTERACTIVE VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default Description;
