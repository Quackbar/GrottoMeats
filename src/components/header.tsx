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
  );
};

export default Header;
