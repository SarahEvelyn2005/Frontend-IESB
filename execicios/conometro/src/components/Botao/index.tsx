import React from "react";
import style from "./Botao.module.scss";

interface Props {
  texto: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

function Botao({ texto, type = "button", onClick }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {texto}
    </button>
  );
}

export default Botao;
