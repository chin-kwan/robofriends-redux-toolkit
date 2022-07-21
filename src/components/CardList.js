import React from "react";
import Card from "./Card";

import { useSelector } from "react-redux";
import { useGetRobotsQuery } from "../apiSlice";

const CardList = () => {
  const searchfield = useSelector((state) => state.search.searchField);
  const { data } = useGetRobotsQuery();
  const filteredRobots = data.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  console.log("filteredRobots", filteredRobots);

  return (
    <div>
      {filteredRobots.map((user, i) => {
        return (
          <Card
            key={i}
            id={filteredRobots[i].id}
            name={filteredRobots[i].name}
            email={filteredRobots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
