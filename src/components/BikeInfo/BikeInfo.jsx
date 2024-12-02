import Description from "../Description/Description.jsx";
import s from "./bikeInfo.module.css";
import imgRentBikes from "../../assets/img/bikes.png";

function BikeInfo() {
  return (
    <div id="rent" className={s["bike-info"]}>
      <img
        className={s["bike-info__img-bikes"]}
        src={imgRentBikes}
        alt="Куча велосипедов"
      />
      <div className={s["bike-info__content"]}>
        <Description
          isMain={true}
          title={"Прокат велосипедов"}
          classStyle={{
            blue_main: "blue_main_text",
            blue_second: "blue_second_text",
          }}
          text={
            "У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!"
          }
        />
      </div>
    </div>
  );
}

export default BikeInfo;
