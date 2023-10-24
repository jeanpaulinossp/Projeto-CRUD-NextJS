import Cliente from "@/core/Cliente";
import React from "react";
import { IconEdit, iconTrash } from "./Icons";

interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

const Tabela = (props: TabelaProps) => {
  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado;

  function renderizarCabecalho() {
    return (
      <tr>
        {/* <th className={`text-left p-4`}>Código</th> */}
        <th className={`text-left p-4`}>Nome</th>
        <th className={`text-left p-4`}>Idade</th>
        {exibirAcoes && <th className={`p-4`}>Ações</th>}
      </tr>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, index) => {
      return (
        <tr key={cliente.id} className={`${index % 2 === 0 ? "bg-blue-200" : "bg-blue-100"}`}>
          {/* <td className={`text-left p-4`}>{cliente.id}</td> */}
          <td className={`text-left p-4`}>{cliente.nome}</td>
          <td className={`text-left p-4`}>{cliente.idade}</td>
          {exibirAcoes && renderActions(cliente)}
        </tr>
      );
    });
  }

  function renderActions(cliente: Cliente) {
    return (
      <td className={`flex items-center justify-center`}>
        {props.clienteSelecionado && (
          <button
            className={`flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50`}
            onClick={() => props.clienteSelecionado?.(cliente)}
          >
            {IconEdit}
          </button>
        )}

        {props.clienteExcluido && (
          <button
            className={`flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-purple-50`}
            onClick={() => props.clienteExcluido?.(cliente)}
          >
            {iconTrash}
          </button>
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`bg-gradient-to-r from-blue-500 to-blue-800 text-gray-100 `}>
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
};

export default Tabela;
