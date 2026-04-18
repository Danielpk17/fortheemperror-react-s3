function Cartao(props) {
  return (
    <div style={{ border: '1px solid white', padding: '10px', margin: '10px' }}>
      <h2>{props.nome}</h2>
      <p>{props.descricao}</p>
    </div>
  )
}

export default Cartao