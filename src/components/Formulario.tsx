import React, { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente;
  cancelado?: () => void;
  clienteMudou?: (cliente: Cliente) => void;
}

const Formulario = (props: FormularioProps) => {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);
  return (
    <div>
      {id && <Entrada texto="Código" valor={id} className="mb-2" />}
      <Entrada texto="Nome" valor={nome} valorMudou={setNome} className="mb-2" />
      <Entrada texto="Idade" valor={idade} valorMudou={setIdade} tipo="number" />
      <div className="flex gap-2 mt-3 justify-end">
        <Botao onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))} cor="blue">
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  );
};

export default Formulario;
