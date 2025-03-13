import React from "react";
import { getImageUrl } from "../../utils";
import style from "./Hero.module.css";

export function Hero() {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>
          Twoja strona, <br /> nasza technologia
        </h1>
        <p className={style.description}>
          Tworzymy nowoczesne, szybkie i bezpieczne strony internetowe,
          dopasowane do Twoich potrzeb. Zapewniamy pełne wsparcie, hosting i
          optymalizację. Napisz do nas i zacznij działać w sieci już dziś!
        </p>
        <a className={style.contact} href="mailto:swantech@pm.me">
          Skontaktuj się
        </a>
      </div>
      <img
        className={style.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="Zdjęcie sekcji Hero"
      />
      <div className={style.topBlur} />
      <div className={style.bottomBlur} />
    </section>
  );
}
