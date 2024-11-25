import style from "./about.module.css";

function About() {
  return (
    <div className={style.about_wrapper}>
      <p>
        Приехав к нам однажды, многие наши клиенты становятся постоянными, а
        часть из них даже друзьями.
      </p>
      <p>
        А также в нашей мастерской можно отремонтировать электросамокат и
        электровелосипед.
      </p>
    </div>
  );
}

export default About;
