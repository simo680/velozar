import OfferItem from "../OfferItem/OfferItem.jsx";
import s from "./offerList.module.css";

function OfferList() {
  let data = [
    { id: 1, title: "Годовое ТО", color: "#22356F" },
    { id: 2, title: "Выравнивание колес", color: "#0052C1" },
    { id: 3, title: "Настройка переключателей", color: "#76B58B" },
  ];

  return (
    <div className={s["offer-list"]}>
      <ul className={s["offer-list__items"]}>
        {data.map((elem) => (
          <li key={elem.id} className={s["offer-list__item"]}>
            <OfferItem title={elem.title} color={elem.color} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OfferList;
