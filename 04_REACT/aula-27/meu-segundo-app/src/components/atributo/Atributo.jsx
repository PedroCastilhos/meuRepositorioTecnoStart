import './atributo.css'

function Atributo({nome}){
    let atributoStyle
    switch (nome) {
        case 'Fogo':
            atributoStyle = {backgroundColor: 'orange', color: 'white'}
            break;
        case 'Agua':
            atributoStyle = {backgroundColor: 'dodgerblue', color: 'white'}
            break;
        default :
            atributoStyle = {backgroundColor: 'gray', color: 'black'}
            nome = "Normal"
            break;
    }

    return(
        <div style={atributoStyle} className='atributo-content'>
            {nome}
        </div>
    )
}

export default Atributo
