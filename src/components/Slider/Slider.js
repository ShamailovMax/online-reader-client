import Carousel from "carousel-react-rcdev";
import style from "./Slider.module.css";
import React from "react";

export const Slider = () => {
  return (
    <Carousel style={{ width: "100%" }}>
      <div className={style.wrapper}>
        <img
          className={style.imgBody}
          src="https://upload.wikimedia.org/wikipedia/commons/5/56/Kiprensky_Pushkin.jpg"
          width={370}
          height={270}
          alt="imagem"
        />
        <div>Русская классика</div>
      </div>
      <div className={style.wrapper}>
        <img
          className={style.imgBody}
          src="https://sibac.info/sites/default/files/blog/kakie-byvayut-nauchnye-stati-3.jpg"
          width={370}
          height={270}
          alt="imagem"
        />
        <div>Любителям научной литературы</div>
      </div>
      <div className={style.wrapper}>
        <img
          className={style.imgBody}
          src="https://lemarbet.com/wp-content/uploads/2019/02/knigi-po-biznesu-skachat-besplatno-min.jpg"
          width={370}
          height={270}
          alt="imagem"
        />
        <div>Бизнес литература</div>
      </div>
    </Carousel>
  );
};