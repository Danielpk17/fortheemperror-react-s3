import { useState } from "react";

function ListaTarefas3 () {

    const [texto, setTexto] = useState ("")
    const [tarefa, setTarefa] = useState ([])

    function adicionar () {
        const novaTarefa = {
            id: Date.now(),
            nome: texto
        }

        setTarefa ([...tarefa, novaTarefa])
        setTexto ("")
    }

    function remover (id) {

        setTarefa(tarefa.filter((t) => t.id !== id))

    }
    return (
    <div>
    <input 
    
    value={texto}
    onChange={(e) => setTexto(e.target.value)}
    placeholder="Digite uma tarefa"
    />

    <button onClick={adicionar}>Adicionar</button>


    {tarefa.length === 0 ? (
        <p>Nenhuma tarefa</p>
    ) : (
    <ul>
        {tarefa.map((t) => (
            <li key={t.id}> 
            {t.nome}
            <button onClick={() => remover(t.id)}>Remover</button>
            </li>
        ))}
    </ul>
    
        )
    }
    
</div>
    )
}

export default ListaTarefas3