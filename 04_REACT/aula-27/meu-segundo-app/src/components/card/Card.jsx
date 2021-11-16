import "./card.css"

import alunos from "../../alunos"
import Conteudo from "../conteudo/Conteudo"

function Card({ titulo, nome, idade, height, largura }) {

    const meusAluno = alunos


    const conteudo = habilitaConteudo(nome, idade)
    const cabecalho = habilitarTítulo(titulo)

    return (
        <div className="container-card" style={{ 'height': height, 'width': largura }}>
            {cabecalho}
            {conteudo}
        </div>
    )
}

export default Card

function habilitaConteudo(nome, idade) {
    if (nome && idade) {
        return (
            <Conteudoo nome={nome} idade={idade}></Conteudo>
        )
    }
}

function habilitarTítulo(titulo) {
    if (titulo) {
        return (
            <>
                <h1>{titulo}</h1>
            </>
        )
    }
}
