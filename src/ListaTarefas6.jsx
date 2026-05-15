import { useState } from "react";

function ListaTarefas6 () {

    const [text, setText] = useState("");
    const [list, setList] = useState([]);

    function Adicionar () {
        const Item = {
            id: Date.now(),
            nome: text
        }
        setList([... list,Item])
        setText("")
    }

    function Remove (id) {
        setList(list.filter((t) => t.id !== id))
    }

    return (
        <div>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Digite um Texto"/>
        <button onClick={Adicionar}>Adicionar</button>
        {list.length === 0 ? (
            <p>Nenhum item na lista</p>
        ) : ( <ul>
            {list.map((t) => (
                <li key={t.id}>
                    {t.nome}
                    <button onClick={() => Remove(t.id)}>Remover</button>
                </li>
            ))}
        </ul>
            
        )}
       
        </div>
    )
}''

export default ListaTarefas6;