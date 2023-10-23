import Cliente from "@/core/Cliente";
import ColecaoCliente from "@/firebase/db/ColecaoCliente";
import { useCallback, useEffect, useMemo, useState } from "react";
import useTabelaForm from "./useTabelaForm";

const useClientes = () => {
  const repo = useMemo(() => new ColecaoCliente(), []);

  const { tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario } = useTabelaForm();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const obterTodos = useCallback(() => {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      exibirTabela();
    });
  }, [repo, exibirTabela]);

  useEffect(() => {
    obterTodos();
  }, [obterTodos]);

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    exibirFormulario();
  }

  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodos();
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    exibirFormulario();
  }

  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    exibirTabela,
  };
};

export default useClientes;
