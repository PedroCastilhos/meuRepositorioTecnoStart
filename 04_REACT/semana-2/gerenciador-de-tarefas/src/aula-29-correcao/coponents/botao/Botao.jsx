import"./botao.css"
export default function Botao({ children}) {
    return (
        <button className="botao">
            {children}
        </button>
    );
};
