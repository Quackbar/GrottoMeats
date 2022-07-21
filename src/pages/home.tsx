import React from "react";
import { Link } from "react-router-dom";
import { CategoryGrid, CategoryTile } from "../components/category-grid";
import Section from "../components/section";
import Spacer from "../components/spacer";

const Home: React.FC = () => {
  return (
    <div id="home-page">
      <Section backgroundImage={require("../assets/images/grotto-meats-slices.jpg")}>
        <div className="hero">
          <div className="image">
            <img src={require("../assets/images/grotto-meats-logo-outline.png")} alt={"Grotto Meats Logo"}></img>
          </div>
        </div>
      </Section>
      <Section>
        <span className="heading sm">Our Mission</span>
        <span className="copy">
          Grotto Meats is inspired to create the{" "}
          <span className="red">
            <strong>finest hand-crafted charcuterie</strong>
          </span>{" "}
          to reflect and preserve the beauty of Montana.
        </span>
        <span className="copy">
          As one of the only charcuteries in Montana, we turn the highest quality local meat into Old World style dry cured sausages and whole muscle
          charcuterie. Creating delicious new takes on classic flavors with local ingredients and a chef’s ingenuity, Grotto Meats preserves the best
          of Montana in every bite. Our “grotto” is tucked in the basement of the historic Bon-Ton Flour Mill building behind our food truck in
          Bozeman, MT, and houses a custom climate controlled curing chamber. Partnering with local distributors to procure the finest local meat, we
          take great care in sourcing sustainable, pastured pork, and each batch is hand-crafted with love and expertise by a small staff.
        </span>
      </Section>
      <Section backgroundImage={require("../assets/images/grotto-meats-hanging.jpg")}>
        <div className="center">
          <span className="heading xlg white">Our Products</span>
        </div>
      </Section>
      <Section>
        <span className="heading md">What Makes Our Charcuterie Special?</span>
        <span className="copy">
          Our handcrafted meats are made with Montana hogs that have been pastured and processed locally. We cut, season, and cure everything right in
          our shop in Bozeman's Northeast Neighborhood. Our meats are true Montana Charcuterie.
        </span>

        <Spacer orientation="vertical" size={60} />

        {/* Replace with product categories */}
        <CategoryGrid>
          <CategoryTile text="Category 01" backgroundImage={require("../assets/images/grotto-meats-category-01.jpeg")} />
          <CategoryTile text="Category 02" backgroundImage={require("../assets/images/grotto-meats-category-02.jpeg")} />
          <CategoryTile text="Category 03" backgroundImage={require("../assets/images/grotto-meats-category-03.jpeg")} />
          <CategoryTile text="Category 04" backgroundImage={require("../assets/images/grotto-meats-category-04.jpeg")} />
        </CategoryGrid>

        <Spacer orientation="vertical" size={30} />

        <div className="center">
          <Link to={"/products"}>
            <button className="button">View All Meats</button>
          </Link>
        </div>
      </Section>
      <Section>
        <div className="row">
          <div className="col-12 col-md-6">
            <span className="heading md">Founder, Chef, Charcutier...</span>
            <span className="copy">
              Nic Bryce is many things to this business. He has enjoyed a long and exciting career as a chef, problem solver, and lover of food. He
              has always been grateful to cook in places where great ingredients are found. As he leads, Chef Nic manages his staff in a way that
              encourages them to be the best they can be. As a business owner, Chef Nic strives to make his neighborhood, town, and region a better
              place to live. He prides himself in serving sustainable foods that make sense. Nic is the also the owner and executive chef of
              Rendezvous Catering™, the builder of the Rendezvous foodtruck (Patty), a supreme pitmaster, and good neighbor. He enjoys living life
              with his wife and raising 5 children together in beautiful Bozeman, MT.
            </span>
          </div>
          <div className="col-12 col-md-6">
            <div className="image">
              <img src={require("../assets/images/grotto-meats-nic.jpg")} alt={"Nic Bryce founder and chef at Grotto Meats"} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
