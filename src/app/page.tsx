"use client";

import React from "react";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import useClientes from "@/hooks/useClientes";

export default function Home() {
  const {
    cliente,
    clientes,
    selecionarCliente,
    novoCliente,
    salvarCliente,
    excluirCliente,
    tabelaVisivel,
    exibirTabela,
  } = useClientes();

  console.log(tabelaVisivel);

  return (
    <div
      className={`flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 text-white`}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="blue" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario cliente={cliente} cancelado={exibirTabela} clienteMudou={salvarCliente} />
        )}
      </Layout>
    </div>
  );
}
