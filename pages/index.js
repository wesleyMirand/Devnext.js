import{ useState } from 'react';

function Home () {
    return (
        <div>
            <h1>A Cada Clique o Perfil Vip te da mais curtidas</h1>
            <h2>Curtidas:</h2>
            <Contador />
            <h3>clique no botão "Acima" para fazer o TESTE</h3>
            
        </div>
    )
}

function Contador () {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )

}

export default Home