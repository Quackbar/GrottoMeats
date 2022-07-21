import { Children } from "react";
import { Link } from "react-router-dom";

type CategoryGridProps = {
  children?: React.ReactNode;
};

const CategoryGrid: React.FC<CategoryGridProps> = (props) => {
  return (
    <div className="category-grid row">
      {props.children && Children.map(props.children, (child) => <div className="col-md-6 col-12">{child}</div>)}
    </div>
  );
};

type CategoryTileProps = {
  backgroundImage?: string;
  text?: string;
  to?: string;
};
const CategoryTile: React.FC<CategoryTileProps> = (props) => {
  return (
    <div className="category-tile">
      <Link to={props.to ?? ""}>
        <div className="background-image-wrapper">
          <div className="background-image" style={{ backgroundImage: `url(${props.backgroundImage})` }}></div>
        </div>
      </Link>
      <span className="copy">
        <Link to={props.to ?? ""}>{props.text}</Link>
      </span>
    </div>
  );
};

export { CategoryGrid, CategoryTile };
