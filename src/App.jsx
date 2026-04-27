import Titulo from './Titulo'
import Cartao from './Cartao'
import Botao from './Botao'
import Perfil from './Perfil'
import Habilidade from './Habilidade'
import Contador from './Contador'
import { useState } from 'react'
import Formulario from './Formulario'
import ListaTarefas from './ListaTarefas'
import ListaTarefas3 from './ListaTarefas3'

const tecnologias = [
  { id: 1, nome: "Git", descricao: "Versionamento de código" },
  { id: 2, nome: "React", descricao: "Biblioteca para interfaces" },
  { id: 3, nome: "Node.js", descricao: "JavaScript no servidor" },
]

const abilitys = [
  {id:1, nome:"React"},
  {id:2, nome:"MongoDB"},
  {id:3, nome:"PHP"},
  {id:4, nome:"JS"},
]

const botonzoes = [
  { id: 4, nome: "Salvar" },
  { id: 5, nome: "Deletar" },
  { id: 6, nome: "Cancelar" },
]


function App() {
  const [mostrar, setMostrar] = useState(true)
  const [mostrarBtn, setMostrarBtn] = useState(true)
  const [mostrarHab, setMostrarHab] = useState(true)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* <Titulo texto="ForTheEmperror - React S1" />
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
       <Perfil nome="Daniel Dal Piva" cargo="Dev" empresa="Questor" />

      <Botao label={mostrarHab ? "Esconder Habilidades" : "Mostrar Habilidades"} aoClicar={() => setMostrarHab(!mostrarHab)} />
        {mostrarHab ? (
          abilitys.map((hab) => (
            <Habilidade key={hab.id} nome={hab.nome}/>
          ))
        ) : (
          <p>Habilidades Ocultas</p> 
        )} */}

        <Contador/>
        <Formulario/>
        {/* <ListaTarefas/>
        <ListaTarefas2/> */}
        <ListaTarefas3/>

    </div>
  )
}

export default App