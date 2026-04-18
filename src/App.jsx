import Titulo from './Titulo'
import Cartao from './Cartao'
import Botao from './Botao'

const tecnologias = [
  { id: 1, nome: "Git", descricao: "Versionamento de código" },
  { id: 2, nome: "React", descricao: "Biblioteca para interfaces" },
  { id: 3, nome: "Node.js", descricao: "JavaScript no servidor" },
]

const botonzinhos = [
  { id: 1, nome: "Salvar"},
  { id: 2 ,nome: "Cancelar"},
  { id: 3, nome: "Deletar"},
]

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Titulo texto="ForTheEmperror - React S1" />
      {tecnologias.map((tech) => (
        <Cartao key={tech.id} nome={tech.nome} descricao={tech.descricao} />
      ))}
      {botonzinhos.map((btn) => (
        <Botao key={btn.id} label={btn.nome} />
      ))}
    </div>
  )
}

export default App