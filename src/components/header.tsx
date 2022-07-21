import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div id="header">
      <div className="logo">
        <Link to={"/"}>
          <div className="image">
            <img src={require("../assets/images/grotto-meats-logo-outline.png")} alt={"Grotto Meats Logo"}></img>
          </div>
        </Link>
      </div>
      <div className="menu">
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
    </div>
  );
};

export default Header;
