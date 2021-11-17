import React from "react";
import "../styles/FoodCard.css";

function FoodCard({ data }) {
  console.log(data);
  return (
    <>
      {data.hits
        ? data.hits.map((val, idx) => {
            return (
              val.recipe.image.match(/\.(jpeg|jpg|gif|png)$/) != null && (
                <div className="food-card" key={idx}>
                  <img
                    src={val.recipe.image}
                    alt="food"
                    onClick={() => window.open(val.recipe.url)}
                  />
                  <p>{val.recipe.label}</p>
                </div>
              )
            );
          })
        : null}
    </>
  );
}

export default FoodCard;
