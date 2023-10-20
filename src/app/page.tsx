"use client";

import Botao from "@/components/Botao";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente("Jean", 31, "1"),
    new Cliente("Normelena", 60, "2"),
    new Cliente("Franciele", 33, "3"),
    new Cliente("Crisostomo", 75, "4"),
    new Cliente("Vanessa", 37, "5"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome);
  }

  return (
    <div
      className={`flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 text-white`}
    >
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao className="mb-4" cor="blue">
            Novo Cliente
          </Botao>
        </div>
        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>
    </div>
  );
}
