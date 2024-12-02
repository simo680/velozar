import s from "./aboutUs.module.css";
import Description from "../Description/Description";
import dinoImg from "../../assets/img/dino.png";

function AboutUs() {
  return (
    <div className={s.aboutUs} id="about">
      <Description
        isMain={true}
        title={"Веломастерская “Велозар”"}
        text={
          "Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды."
        }
        classStyle={{
          mainTitle: "main-title",
          mainText: "main-text",
        }}
      />
      <img className={s.aboutUs__dinosaur} src={dinoImg} alt="Радостный динозавр на велосипеде с очками и кепкой" />
    </div>
  );
}

export default AboutUs;
