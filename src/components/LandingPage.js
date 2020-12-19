import React from "react";
import s from "./LandingPage.module.css";

const LandingPage = ({ background, title, subtitle }) => (
  <div
    className={s.container}
    style={{ backgroundImage: `url(${background})` }}
  >
    <div className={s.title}>{title}</div>
    <div className={s.subtitle}>{subtitle}</div>
  </div>
);

export default LandingPage;