import s from "../Description/description.module.css";

function Description({ isMain, title, text, classStyle }) {
  return (
    <div className="description">
      {isMain ? (
        <h1 className={classStyle["mainTitle"]}>{title}</h1>
      ) : (
        <h2 className={classStyle["subTitle"]}>{title}</h2>
      )}
      <p
        className={
          isMain ? classStyle["mainText"] : classStyle["secondaryText"]
        }
      >
        {text}
      </p>
    </div>
  );
}

export default Description;
