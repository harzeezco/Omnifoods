import "./Hero-component.scss";
import Button from "../../../components/Button/Button-component";
import HeroImage from "./Hero-Image/Hero-images-component";
import Customer from "./customers/Hero-customer-component";

const Hero = () => {
  return (
    <section className="hero--section">
      <div className="hero--content">
        <div className="hero--text-box">
          <h1 className="hero--primary">
            Delicious Meals Delivered <br /> to Your Door - Satisfaction
            Guaranteed
          </h1>
          <p className="hero--secondary">Discount up to 60%</p>
          <Button btnInnerText="order now &rarr;" btnClassName="hero__btn" />
          <Customer />
        </div>
        <div className="gallery">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
