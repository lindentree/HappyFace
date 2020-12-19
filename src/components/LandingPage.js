import React from "react";
import s from "./LandingPage.module.css";

const LandingPage = ({ background, title, subtitle }) => (
  <div
    className={s.container}
    style={{ backgroundImage: `url(${background})` }}
  >
    <h1 className={s.title}>{title}</h1>
    <div className={s.subtitle}>{subtitle}</div>
  </div>

  
);

export default LandingPage;