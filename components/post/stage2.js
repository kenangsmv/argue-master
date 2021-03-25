import React from "react";
import Technology from "../../icons/technology.png";
import Sport from "../../icons/sport.png";
import Science from "../../icons/science.png";
import Music from "../../icons/music.png";
import Films from "../../icons/films.png";
import Games from "../../icons/game.png";
import TechBackground from "../../images/technologybackground.jpg";
import SportBackground from "../../images/sportbackground.jpg";
import ScienceBackground from "../../images/sciencebackground.jpg";
import MusicBackground from "../../images/musicbackground.jpg";
import FilmBackground from "../../images/filmbackground.jpg";
import GameBackground from "../../images/gamebackground.jpg";
import Check from "../../icons/check.png"

let categories_Array = [
  {
    name: "Technology",
    photo: TechBackground,
    icon: Technology,
  },
  {
    name: "Sports",
    photo: SportBackground,
    icon: Sport,
  },
  {
    name: "Science",
    photo: ScienceBackground,
    icon: Science,
  },
  {
    name: "Music",
    photo: MusicBackground,
    icon: Music,
  },
  {
    name: "Film",
    photo: FilmBackground,
    icon: Films,
  },
  {
    name: "Game",
    photo: GameBackground,
    icon: Games,
  },
];

export default function stage2({ changeValue, categories }) {
  // statei read edebilirsin ama update edemessin

  const toggle = (categorie) => {
    // stateteki arrayi boş arraye ata
    let arr = [...categories];

    let isInside = categories.includes(categorie);

    if (isInside) {
      //çıkar

      arr = arr.filter((item) => item !== categorie);
      //arrayi gez array elemanlarından teknolojiye eşit olmayanları tut gerisini filtrelere
    } else {
      //pushla
      arr.push(categorie);
    }

    changeValue("categories", arr);
  };

  // kategorinin seçili olup olmadığını dödnrücek

  const check = (categorie) => {
    return categories.includes(categorie);
  };

  console.log("kategroiler", categories);
  const checkTick = (kategori) => {
    let check = categories.includes(kategori);
    return check;
  };

  return (
    <div className="w100 column">
      <div className="center w100 border-bottom">
        <h2 className="mb1">Select Category</h2>
      </div>
      <div className="mt2 flex-start column mb1">
        <div className="categoryContainer ">
          {categories_Array.map((categorie) => (
            <div
              className=" maskcontainer category center needHover box-shadow  "
              style={{ color: "white" }}
              onClick={() => toggle(categorie.name)}
            >
              <div className=" maskcontainerBox  needHover center">
                <img style={{opacity:checkTick(categorie.name)?"0.5":"2"}} className="backgroundImage" src={categorie.photo} alt="" />

                <div className="center column w100 iconText hoverToScale categoryOverlay">
                  <img className="categorieIcons" src={categorie.icon} alt="" />

                  <div className="categoriesHover ">
                    <span >{categorie.name}</span>
                  </div>
                </div>
              </div>

              {checkTick(categorie.name) && (
                <img src={Check} className="categoryTick"></img>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//
