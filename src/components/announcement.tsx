import { useState } from "react";

const Announcement: React.FC = () => {
  const [hidden, setHidden] = useState<boolean>(false);

  return (
    <div id="announcement" className={hidden ? "hidden" : ""}>
      <span className="announcement-text">Order our meat!</span>
      <div className="close-action" onClick={() => setHidden(true)}>
        <i className="bi bi-x" />
      </div>
    </div>
  );
};

export default Announcement;
