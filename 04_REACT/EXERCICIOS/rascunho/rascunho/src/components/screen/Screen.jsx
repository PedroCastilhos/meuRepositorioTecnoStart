import React, { useState, useEffect } from "react";
import axios from 'axios';
import './screen.css';

// eslint-disable-next-line no-unused-vars


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  // eslint-disable-next-line no-unused-vars
  const [cartoes, setCartoes] = useState([])
  
  useEffect(() =>{

    async function fetchCartoes() {
      const resultado = await axios.get('https://jsonplaceholder.typicode.com/comments')
      setCartoes(resultado.data)
}

  fetchCartoes()
  
  }, [])

return(
    <div className="container">
    <div className="screen">
        <h3>Lista</h3> 
        <main>
          <ul>
            {cartoes.map(cartao => {
              return (
                <li>
                  <p>{cartao.name} <br />{cartao.email} <br />{cartao.body}</p>                    
                </li>                
              )
            })}

          </ul>          
        </main> 
    </div>
    </div>
)
} 

  

 