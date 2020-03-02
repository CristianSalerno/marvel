import React, { Component } from "react";

import "./card.css";

const DataMocked = [
  {
    id: 1,
    name: "Spiderman",
    image:
      "https://www.yosoyungamer.com/wp-content/uploads/2020/02/Spider-Man-2.jpg"
  },
  {
    id: 2,
    name: "Iron Man",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/iron-man-nuevo-traje-1539168331.jpg?crop=1.00xw:0.241xh;0,0&resize=480:*"
  },
  {
    id: 3,
    name: "Wolverine",
    image:
      "https://i2.wp.com/www.gliacchiappafilm.it/wp-content/uploads/2019/03/Wolverine-Infinity-Gauntlet-Comic.jpg?fit=1024%2C512&ssl=1"
  }
];

const urlApi =
  "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f40a5338a4d10dd29a3cf7c57e2c7b44&hash=0794c0fb33131c1fb52f0a4703ecf4b1";

fetch(urlApi)
  .then(res => res.json)
  .then(json => console.log(json));

class HeroeCard extends Component {
  render() {
    return (
      <>
        <div className="container">
          {DataMocked.map((hero, index) => {
            return (
              <div className="card-body" key={index}>
                <h4>{hero.name}</h4>
                <img src={hero.image} />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default HeroeCard;
