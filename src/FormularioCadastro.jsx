import { useState } from "react";

function FormularioCadastro (props) {

    const [nome, setNome] = useState ("");
    const [nivel, setNivel] = useState("");

    function Adicionar () {

        const novaTecnologia = {
            id: Date.now(),
            nome: nome,
            nivel: nivel
        }
        props.aoAdicionar(novaTecnologia)
        setNome("");
        setNivel("");
    }

    return (
        <div>
        <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome?"/>
        <input value={nivel} onChange={(e) => setNivel(e.target.value)} placeholder="Digite seu nível?"/>
        <button onClick={Adicionar}>Adicionar</button>
        </div>
    )

}

export default FormularioCadastro;