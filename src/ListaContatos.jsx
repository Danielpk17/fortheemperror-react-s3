import { useState } from "react";

function ListaContatos () {

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [contatos, setContatos] = useState([]);

    function adicionar () {

        if(!telefone.trim() || !nome.trim()) {
            return 
        }

        const contato = {
            id: Date.now(),
            nome: nome,
            telefone: telefone
        }

        setContatos([...contatos, contato])
        setNome("")
        setTelefone("")
    }

    function remover (id) {
        setContatos(contatos.filter((e) => e.id !== id))
    }

    return (
        <div>
            <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome"/>
            <input value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Telefone"/>
            <button onClick={adicionar}>Adicionar</button>
            {
            contatos.length === 0 ? 
                <p>Nenhum contato cadastrado</p> : 
                <div>
                    {
                        contatos.map((c) => (
                        <div key={c.id}>
                            {c.nome}
                            {c.telefone}
                            <button onClick={() => remover(c.id)}>Remover</button>
                        </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default ListaContatos;