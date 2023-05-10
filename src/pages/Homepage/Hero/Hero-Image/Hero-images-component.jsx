import Image from "../../../../components/Image/Image-component";
import heroImg1 from "../../../../assets/gallery/gallery-1.jpg";
import heroImg2 from "../../../../assets/meals/gallery-2.jpg";
import heroImg3 from "../../../../assets/meals/gallery-3.jpg";
import heroImg4 from "../../../../assets/meals/meal-2.jpg";
import heroImg5 from "../../../../assets/meals/meal-1.jpg";
import heroImg6 from "../../../../assets/meals/gallery-7.jpg";
import heroImg7 from "../../../..//assets/meals/gallery-11.jpg";
import heroImg8 from "../../../../assets/meals/gallery-12.jpg";
import heroImg9 from "../../../../assets/meals/gallery-4.jpg";

const HeroImage = () => {
  return (
    <>
      <Image className="hero--img1" img={heroImg1} />
      <Image className="hero--img2" img={heroImg2} />
      <Image className="hero--img3" img={heroImg3} />
      <Image className="hero--img4" img={heroImg4} />
      <Image className="hero--img5" img={heroImg5} />
      <Image className="hero--img5" img={heroImg6} />
      <Image className="hero--img5" img={heroImg7} />
      <Image className="hero--img5" img={heroImg8} />
      <Image className="hero--img5" img={heroImg9} />
    </>
  );
};

export default HeroImage;
