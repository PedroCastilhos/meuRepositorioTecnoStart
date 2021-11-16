import './App.css';

function App() {
    const nome = 'Jackson'
    const idade = 25
    return (
        <div>
            <header className="App-header">
                <p>
                    Meu nome é {nome}
                </p>
                <p>
                    Eu tenho {idade} anos
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
