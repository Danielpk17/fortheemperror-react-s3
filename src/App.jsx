import { useState } from 'react'
import FormularioCadastro from "./FormularioCadastro"
import CartaoTecnologia from "./CartaoTecnologia"
import Contador2 from "./Contador2"


function App() {
  const [mostrar, setMostrar] = useState(true)
  const [tecnologias, setTecnologias] = useState([])

   function Adicionar(novaTecnologia) {
        setTecnologias([...tecnologias, novaTecnologia])
      }

    function remove(id) {
        setTecnologias(tecnologias.filter((t) => t.id !== id))
    }

  return (

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

  <FormularioCadastro aoAdicionar={Adicionar}/>
  <Contador2 total={tecnologias.length} />
  <button onClick={() => setMostrar(!mostrar)}>
    {mostrar ? "Esconder" : "Mostrar"}
  </button>

    {!mostrar ? (
    <p>Lista oculta</p>
    ) : tecnologias.length === 0 ? (
      <p>Nenhuma Tecnologia</p>
    ) : (
      <ul>
        {tecnologias.map((t) => (
          <CartaoTecnologia key={t.id} nome={t.nome} nivel={t.nivel} aoRemover={() => remove(t.id)} />
        ))}

      </ul>    
)}

    </div>
  )
}

export default App