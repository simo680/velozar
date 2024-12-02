import Description from "../Description/Description";
import s from "./serviceDescription.module.css";
import imgBikes from "../../assets/img/red-bike.png";

function Services() {
  return (
    <div className={s["service-description"]}>
      <div className={s["service-description__text"]}>
        <Description
          isMain={false}
          title={"Что мы предлагаем"}
          text={
            "В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. "
          }
          classStyle={{
            subTitle: "sub-title",
            secondaryText: "secondary-text",
          }}
        />
      </div>
      <img className={s['service-description__img-bikes']} src={imgBikes} alt="Bikes" />
    </div>
  );
}

export default Services;
