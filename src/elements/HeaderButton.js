import React from "react";
import "../styles/HeaderButton.scss";

const HeaderButton = () => {
  return (
    <div className="slidebutton">
      <button>
        <a href="#aboutme">
          <i className="fa-sharp fa-solid fa-chevron-down"></i>
        </a>
      </button>
    </div>
  );
};

export default HeaderButton;
