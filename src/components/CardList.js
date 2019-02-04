import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            url={robots[i].url}
            role={robots[i].role}
            content={robots[i].content}
            date={robots[i].date}
            image={robots[i].image}
            code={robots[i].code}
          />
        );
      })}
    </div>
  );
};

export default CardList;
