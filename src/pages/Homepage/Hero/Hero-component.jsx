import "./Hero-component.scss";
import Button from "../../../components/Button/Button-component";
import HeroImage from "./Hero-Image/Hero-images-component";
import Customer from "./customers/Hero-customer-component";

const Hero = () => {
  // return (
  //   <section className="hero--section">
  //     <div className="hero--content">
  //       <div className="hero--text-box">
  //         <h1 className="hero--primary">
  //           Delicious Meals Delivered <br /> to Your Door - Satisfaction
  //           Guaranteed
  //         </h1>
  //         <p className="hero--secondary">Discount up to 60%</p>
  //
  //         <Customer />
  //       </div>
  //       <div className="gallery">
  //         <HeroImage />
  //       </div>
  //     </div>
  //   </section>
  // );
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
          <Button btnInnerText="order now &rarr;" btnClassName="hero__btn" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
