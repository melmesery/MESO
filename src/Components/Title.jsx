import React from "react";
import "../Styles/Title.css";

const Title = ({ title }) => {
  return (
    <>
      <h1 className="TITLE fw-bold display-4 text-center">
        {title}
      </h1>
    </>
  );
};

export default Title;
