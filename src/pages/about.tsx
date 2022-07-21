import Section from "../components/section";
import Spacer from "../components/spacer";

const About: React.FC = () => {
  return (
    <div id="about-page">
      <Section backgroundImage={require("../assets/images/grotto-meats-about-nic.jpg")}>
        <div className="hero center"></div>
      </Section>
      <Section>
        <span className="heading lg">About Grotto Meats</span>
        <span className="copy">
          As one of the only charcuteries in Montana, we turn the highest quality local meat into Old World style dry cured sausages and whole muscle
          charcuterie.
        </span>
        <Spacer orientation="vertical" size={40} />
        <div className="row">
          <div className="col-md-3 col-sm-6 col-12 ">
            <div className="image">
              <img src={require("../assets/images/grotto-meats-about-01.jpg")} alt={"Grotto Meats"} />
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12 ">
            <div className="image">
              <img src={require("../assets/images/grotto-meats-about-02.jpg")} alt={"Grotto Meats"} />
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12 ">
            <div className="image">
              <img src={require("../assets/images/grotto-meats-about-03.jpg")} alt={"Grotto Meats"} />
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12 ">
            <div className="image">
              <img src={require("../assets/images/grotto-meats-about-04.jpg")} alt={"Grotto Meats"} />
            </div>
          </div>
        </div>
        <Spacer orientation="vertical" size={40} />
        <div className="row">
          <div className="col-md-4 col-12">
            <span className="heading md">Chef Driven</span>
            <span className="copy">
              Chef Nic is involved at every level of Grotto Meats. From designing recipes to ensuring the highest quality ingredients, he brings a
              chef's palate to charcuterie making and a chef's creativity to the finest details.
            </span>
          </div>
          <div className="col-md-8 col-12">
            <div className="image">
              <img src={require("../assets/images/grotto-meats-nic-and-son.jpg")} alt={"Nic and Son at Grotto Meats"} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
export default About;
