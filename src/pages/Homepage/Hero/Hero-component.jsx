import "./Hero-component.scss";
import Button from "../../../components/Button/Button-component";

const Hero = () => {
  return (
    <div className="Hero--section hero--bg__img">
      <div className="hero__text--content hero--overlay">
        <div className="hero__text--box">
          <h1 className="hero--primary">
            All Your Favorite Foods. in One Place.
          </h1>

          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <Button buttonType="callToAction">order now &rarr;</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
