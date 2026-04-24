import { useState } from "react";

function Contador () {
    const [contagem, setContagem] = useState(0);
return (
<div>
    <h2>{contagem}</h2>
    <button onClick={() => setContagem (contagem + 1)}> Incrementar +1 </button>
    <button onClick={() => setContagem (contagem - 1)}> Decrementar -1</button>
    <button onClick={() => setContagem (0)}> Reset</button>
</div>
  )
}

export default Contador