import { useState } from "react";

const usePost = () => {
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);

  async function cadastrarDados<T>({ url, dados }: { url: string; dados: T }) {
    try {
      await fetch(`http://localhost:8080/${url}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados),
      });
      setSucesso(true);
    } catch (error) {
      setErro("Erro ao cadastrar dados!");
    }
  }
  return { cadastrarDados, erro, sucesso };
};

export default usePost;
