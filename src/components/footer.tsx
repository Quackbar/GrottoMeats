import { Link } from "react-router-dom";
import Section from "./section";

const Footer: React.FC = () => {
  return (
    <div id="footer">
      <Section>
        <div className="social-icons">
          <div className="icon">
            <Link to={"https://www.instagram.com/grottomeats/"}>
              <i className="bi bi-instagram" />
            </Link>
          </div>
          <div className="icon">
            <Link to={"https://www.facebook.com/grottomeats/"}>
              <i className="bi bi-facebook" />
            </Link>
          </div>
          <div className="icon">
            <Link to={"mailto:grottomeats@gmail.com"}>
              <i className="bi bi-envelope" />
            </Link>
          </div>
          <div className="icon">
            <Link to={"tel:4065481438"}>
              <i className="bi bi-telephone" />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <h3>Public Hours</h3>
            <span>Available Monday - Friday 9 - 5</span>
            {/* <Link to={"/"}>
              <div className="image">
                <img src={require("../assets/images/grotto-meats-logo-outline.png")} alt={"Grotto Meats Logo"}></img>
              </div>
            </Link> */}
          </div>
          <div className="col-12 col-md-4">
            <div className="menu">
              <nav>
                <ul>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/products"}>Products</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link to={"/wholesale"}>Wholesale</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </Section>
    </div>
  );
};

export default Footer;
