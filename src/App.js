import React, { useState, useEffect } from "react";

import { player, skills } from "./data";

import Node from "./components/Node";
import Stat from "./components/Stat";

function App() {
  const [filteredSkills, setFilteredSkills] = useState([]);

  useEffect(() => {
    checkNodes();
  }, [skills]);

  const checkNodes = () => {
    console.log("checking nodes");

    setFilteredSkills(
      skills.filter(
        (skill) => skill.isUnlocked === true && skill.isComplete === false
      )
    );
  };

  const handleClick = (event, data) => {
    //TODO Update this to work with other types of nodes
    // Set complete
    data.isComplete = true;

    // Update player stats
    if (data.type == "skill") {
      player.stats[data.skill_id] = data.max_level;
    }

    //Set next available
    //TODO Update this to allow for more types
    if (data.id < skills.length) {
      skills[data.id].isUnlocked = true;
    } else {
      console.log("ERROR UPDATING SKILLS");
    }

    // Update nodes
    checkNodes();
  };

  return (
    <>
      <h1>SKILLS</h1>
      {filteredSkills === [] && <div>NOTHING</div>}

      {filteredSkills.map((skill) => (
        <Node
          object={skill}
          key={skill.id}
          name={skill.name}
          image_name={skill.image_name}
          onClick={handleClick}
        />
      ))}
      <h1>STATS</h1>
      {player.stats.map((stat, index) => (
        <Stat
          key={index + 1}
          stat_image={player.stat_images[index]}
          stat={stat}
        />
      ))}
    </>
  );
}

export default App;
