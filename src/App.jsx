import Titulo from './Titulo'
import Cartao from './Cartao'
import Botao from './Botao'
import { useState } from 'react'

const tecnologias = [
  { id: 1, nome: "Git", descricao: "Versionamento de código" },
  { id: 2, nome: "React", descricao: "Biblioteca para interfaces" },
  { id: 3, nome: "Node.js", descricao: "JavaScript no servidor" },
]

const botonzoes = [
  { id: 4, nome: "Salvar" },
  { id: 5, nome: "Deletar" },
  { id: 6, nome: "Cancelar" },
]

function App() {
  const [mostrar, setMostrar] = useState(true)
  const [mostrarBtn, setMostrarBtn] = useState(true)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Titulo texto="ForTheEmperror - React S1" />
      <Botao label={mostrar ? "Esconder" : "Mostrar"} aoClicar={() => setMostrar(!mostrar)} />
      {mostrar ? (
        tecnologias.map((tech) => (
          <Cartao key={tech.id} nome={tech.nome} descricao={tech.descricao} />
        ))
      ) : (
        <p>Nenhuma tecnologia visível</p>
      )}
      <Botao label={mostrarBtn ? "Esconder BTN" : "Mostrar BTN"} aoClicar={() => setMostrarBtn(!mostrarBtn)} />
      {mostrarBtn ? (
        botonzoes.map((btnz) => (
          <Botao key={btnz.id} label={btnz.nome}/>
        ))
      ) : (
        <p>Nenhuma Botão visível</p>
      )}
    </div>
  )
}

export default App