type SpacerProps = {
  size: number;
  orientation: "vertical" | "horizontal";
};

const Spacer: React.FC<SpacerProps> = ({ size, orientation }) => {
  const styling = () => {
    switch (orientation) {
      case "vertical":
        return { height: size + "px" };
      case "horizontal":
        return { width: size + "px" };
    }
  };
  return <div className="spacer" style={styling()} />;
};

export default Spacer;
