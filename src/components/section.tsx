type SectionProps = {
  orientation?: "horizontal" | "vertical";
  fullWidth?: boolean;
  backgroundImage?: string;
  backgroundPosition?: string;
  children?: React.ReactNode;
};
const Section: React.FC<SectionProps> = (props) => {
  return (
    <div className="section" style={{ backgroundImage: `url(${props.backgroundImage})`, backgroundPosition: props.backgroundPosition }}>
      <div className={"inner " + (props.orientation ? props.orientation : "vertical") + (props.fullWidth ? " full-width" : "")}>{props.children}</div>
    </div>
  );
};

export default Section;
