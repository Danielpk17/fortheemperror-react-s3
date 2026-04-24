import { useState } from "react"

function Formulario() {
  const [dados, setDados] = useState({ nome: "", email: "" })

  return (
    <div>
      <h2>Cadastro</h2>
      <input
        placeholder="Nome"
        value={dados.nome}
        onChange={(e) => setDados({ ...dados, nome: e.target.value })}
      />
      <input
        placeholder="Email"
        value={dados.email}
        onChange={(e) => setDados({ ...dados, email: e.target.value })}
      />
      <p>Nome: {dados.nome}</p>
      <p>Email: {dados.email}</p>
    </div>
  )
}

export default Formulario