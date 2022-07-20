type SectionProps = {
  orientation?: "horizontal" | "vertical";
  children?: React.ReactNode;
};
const Section: React.FC<SectionProps> = (props) => {
  return (
    <div className="section">
      <div className={"inner " + (props.orientation ? props.orientation : "vertical")}>{props.children}</div>
    </div>
  );
};

export default Section;
