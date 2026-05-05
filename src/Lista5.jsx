import { useState } from "react";

function ListaTarefas5() {

    const [textos, setTextos] = useState("")
    const [list, setList] = useState([])

    function add() {

        const novaTarefa = {
            id: Date.now(),
            nome: textos
        }

        setList([...list, novaTarefa])
        setTextos("");
    }

    function remove(id) {
        setList(list.filter((t) => t.id !== id))
    }

    return (

        <div>
            <h1>LISTA 5</h1>

            <input 
            value={textos}
            onChange={(e) => setTextos(e.target.value)}
            placeholder="Digite a Tarefa"
            />

            <button onClick={add}>Add</button>

            {list.length === 0 ? (
                <p>Nenhuma tarefa encontrada.</p>
            ) : (
                <ul>
                    {list.map((t) => 
                    <li key={t.id}>
                        {t.nome}
                        <button onClick={() => remove (t.id)}>Remove</button>
                    </li>
                    )}
                </ul>
            )}
        </div>

    )

}

export default ListaTarefas5