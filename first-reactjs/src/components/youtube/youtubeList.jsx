import React from "react";
import YoutubeItem from "./youtube";
import { data } from "../../data";
const YoutubeList = () => {
  return (
    <div className="you-list">
      {data.map((item, index) => {
        let newClass = index === 1 ? "contrast" : "";
        return (
          <YoutubeItem
            class={newClass}
            key={item.id}
            img={item.img}
            title={item.title}
            name={item.name}
            avatar={item.img}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
