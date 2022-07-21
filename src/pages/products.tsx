import Section from "../components/section";

const Products: React.FC = () => {
  return (
    <div id="products-page">
      <Section backgroundImage={require("../assets/images/grotto-meats-products.jpg")} backgroundPosition={"bottom center"}>
        <div className="hero center">
          <span className="heading xlg white">Our Products</span>
        </div>
      </Section>
    </div>
  );
};
export default Products;
