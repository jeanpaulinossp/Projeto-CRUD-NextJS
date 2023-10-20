import React from "react";

interface BotaoProps {
  cor?: "green" | "blue" | "gray";
  className?: string;
  children: any;
}

const Botao = (props: BotaoProps) => {
  const cor = props.cor ?? "gray";

  const color = {
    green: "bg-gradient-to-r from-green-400 to-green-700",
    blue: "bg-gradient-to-r from-blue-400 to-blue-700",
    gray: "bg-gradient-to-r from-gray-400 to-gray-700",
  };

  return (
    <button className={`${color[cor]} text-white px-4 py-2 rounded-md ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Botao;
