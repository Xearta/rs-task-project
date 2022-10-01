import React from "react";

const Node = (props) => {
  return (
    <button onClick={(e) => props.onClick(e, props.object)}>
      <img src={`./images/skill_images/${props.image_name}`} />
      <div>{props.name}</div>
    </button>
  );
};

export default Node;
