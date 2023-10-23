import React from "react";

interface EntradaProps {
  texto: string;
  tipo?: "text" | "number";
  valor: string | number;
  somenteLeitura?: boolean;
  valorMudou?: (valor: any) => void;
  className?: string;
}

const Entrada = (props: EntradaProps) => {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-4" htmlFor="">
        {props.texto}
      </label>
      <input
        type={props.tipo ?? "text"}
        name=""
        id=""
        value={props.valor}
        readOnly={props.somenteLeitura}
        className={`border border-blue-500 rounded-lg focus: outline-none bg-gray-100 px-4 py-2 
        } `}
        onChange={(e) => props.valorMudou?.(e.target.value)}
      />
    </div>
  );
};

export default Entrada;
