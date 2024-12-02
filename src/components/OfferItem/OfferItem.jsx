import s from "./offerItem.module.css";

function OfferItem(props) {
  const { title, color } = props;

  return (
    <div id="offer" className={s["offer-item"]} style={{ backgroundColor: color }}>
      <div className={s["offer-item__line"]}></div>
      <h3 className={s["offer-item__title"]}>{title}</h3>
    </div>
  );
}

export default OfferItem;
