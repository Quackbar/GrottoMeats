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
        <div className="info-wrapper">
          <div className="info-section">
            <span className="heading md">Public Hours</span>
            <span className="copy">
              We are available Monday through Friday from <strong>nine</strong> to <strong>five</strong>. Or find where it's stocked on the shelves.
            </span>
          </div>

          <div className="info-section">
            <span className="heading md">Contact Us</span>
            <span className="copy">611 N. Wallace Ave Bozeman, MT 59715</span>
            <span className="copy">
              <Link to={"tel:4065481438"}>(406) 548-1438</Link>
            </span>
            <span className="copy">
              <Link to={"mailto:grottomeats@gmail.com"}>grottomeats@gmail.com</Link>
            </span>
          </div>
        </div>
        <div className="copyright-menu">
          <span className="copy">
            © {new Date().getFullYear()} Grotto Meats | Site designed by <Link to={"http://www.goldblockchain.us"}>Gold Block Chain</Link>
          </span>
          <nav>
            <ul>
              <li>
                <span className="copy">
                  <Link to={"/"}>Home</Link>
                </span>
              </li>
              <li>
                <span className="copy">
                  <Link to={"/products"}>Products</Link>
                </span>
              </li>
              <li>
                <span className="copy">
                  <Link to={"/about"}>About</Link>
                </span>
              </li>
              <li>
                <span className="copy">
                  <Link to={"/wholesale"}>Wholesale</Link>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </Section>
    </div>
  );
};

export default Footer;
