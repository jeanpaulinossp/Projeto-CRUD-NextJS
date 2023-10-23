import { useState, useCallback } from "react";

const useTabelaForm = () => {
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  const exibirTabela = useCallback(() => setVisivel("tabela"), []);
  const exibirFormulario = useCallback(() => setVisivel("form"), []);

  return {
    formularioVisivel: visivel === "form",
    tabelaVisivel: visivel === "tabela",
    exibirTabela,
    exibirFormulario,
  };
};

export default useTabelaForm;
