import { useState } from "react";

function ListonaFinalBoss () {

    const [names, setNames] = useState("");
    const [tarefonas, setTarefonas] = useState([]);
    
    function adicionarzao () {
        const produto = {
            codigo: Date.now(),
            name: names
        }
        setTarefonas([... tarefonas, produto])
        setNames("")
    }

    function removersao (codigo) {
        setTarefonas(tarefonas.filter((r) => r.codigo !== codigo))
    }

    return (
        <div>
            <input value={names} onChange={(e) => setNames(e.target.value)} placeholder="Digite o seu Nome"/>
            <button onClick={adicionarzao}>Adicionar</button>
            {tarefonas.length === 0 ? (
                <p>nenhuma tarefona</p>
            ) : (
                <ul>
                    {tarefonas.map((r) => (
                        <li key={r.codigo}>
                            {r.name}
                            <button onClick={() => removersao(r.codigo)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )

}

export default ListonaFinalBoss;