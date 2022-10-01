import React from "react";

const Stat = (props) => {
  return (
    <>
      <img src={`./images/skill_images/${props.stat_image}`} />
      {props.stat}{" "}
    </>
  );
};

export default Stat;
