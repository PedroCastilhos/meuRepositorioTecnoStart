import './externalCard.css'

export default function ExternalCard(props){

    return (
      <div className="externalCard">

          <div className="externalCardContent">
          <h1>
              {props.children}
          </h1>
              <div className="addTask">
                  <input></input>
                  <button>Adicionar</button>
              </div>
              <ul>
                <li>
                  <div className="task"> Lorem ipsum dolor</div>
                </li>
              </ul>
          </div>
          
      </div>
    )

}

