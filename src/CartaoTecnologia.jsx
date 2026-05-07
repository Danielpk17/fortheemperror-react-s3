function CartaoTecnologia (props) {

    return <div>{props.nome}, {props.nivel}, <button onClick={props.aoRemover}>Remover</button></div>

}

export default CartaoTecnologia;