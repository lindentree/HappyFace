import React, { useState } from "react";
import s from "./LandingPage.module.css";
import Recommendations from "./Recommendations";


function LandingPage ({ background, title, subtitle }) {
  const [user, setUser] = useState({ loggedIn: false });

  let recs;

  if (user.loggedIn) {
    recs = <Recommendations />;
  } else {
    recs = null;
  }

  return (
  <div
    className={s.container}
    style={{ backgroundImage: `url(${background})` }}
  >
    <h1 className={s.title}>{title}</h1>
    <div className={s.subtitle}>{subtitle}</div>
    {recs}
    <button onClick={() => setUser({loggedIn: !user.loggedIn})}>
        Demo
      </button>
  </div>
  );

};

export default LandingPage;