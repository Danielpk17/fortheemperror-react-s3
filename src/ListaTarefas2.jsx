import { useState } from "react";

function ListaTarefas2 () {
    const [texto, setTexto] = useState("");
    const [tarefas, setTarefas] = useState([]);

    function adicionar () {

        const novaTarefa = {
            id: Date.now(),
            nome: texto
        }

        setTarefas([...tarefas, novaTarefa])
        setTexto("");
    }

    function remover (id) {
        setTarefas(tarefas.filter((t) => t.id !== id))
    }

    return (

        <div>
            <h2>Lista de Tarefas</h2>

            <input 
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Digite uma tarefa" />

            <button onClick={adicionar}>Adicionar</button>

            {tarefas.length === 0} ? (
                <p>Nenhuma Tarefas</p>
            ) : (
                <ul>
                    {tarefas.map((t) => 
                    <li key={t.id}>
                    {t.nome}
                    <button onClick={() => remover (t.id)}>Remover</button>
                    </li>
                    )}
                </ul>
            )
        </div>

    )
}