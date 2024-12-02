import s from "./clientExperience.module.css";

function ClientExperience() {
  return (
    <div className={s["client-experience"]}>
      <p className={s["client-experience__text"]}>
        Приехав к нам однажды, многие наши клиенты становятся постоянными, а
        часть из них даже друзьями.
      </p>
      <p className={s["client-experience__text"]}>
        А также в нашей мастерской можно отремонтировать электросамокат и
        электровелосипед.
      </p>
    </div>
  );
}

export default ClientExperience;
