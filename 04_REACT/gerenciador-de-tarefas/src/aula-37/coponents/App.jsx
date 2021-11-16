
import { useState, useEffect } from "react"
import { ReqResApi } from "../services/req-res/ReqResAPI"

export default function App() {
  const [data, seData] = useState([]) 
  const [users, setUsers] = useState([])
  const [itensPorPagina, setItensPorPagina] = useState("")
  const [itemPesquisa, setItemPesquisa] = useState("/users")

  useEffect(()=>{
    ReqResApi.get(itemPesquisa).then(response => setUsers(response.data.data))
    ReqResApi.get(itemPesquisa).then(response => seData(response.data))
  }, [itemPesquisa])



  function arreyParaItemDaLista() {

    return users.map(user => {
      return (
        <li key={user.id}>
          <div>
            <img src={user.avatar} alt={`avatar do usuário ${user.first_name}`} /> <br />
            <span><strong>Nome:</strong> {user.first_name} {user.last_name}</span> <br />
            <span><strong>Email:</strong> {user.email}</span>
          </div>
        </li>

      )
    })
  }

  function handleOnchegeItensPorPagina(event){
    setItensPorPagina(event.target.value)
  }

  function handleOnClick(event){
    setItemPesquisa(`users?per_page=${itensPorPagina}`)
    setItensPorPagina("")
  }

  function voltarPage(){
    let pesquisa = itemPesquisa
    let valorPage = 1;
    if(data.page > 1){
        valorPage = data.page-1 
      }
    if(pesquisa.toString().includes("?")){
      pesquisa += `&page=${valorPage}`
    }else{
      pesquisa += `?page=${valorPage}`
    }
    setItemPesquisa(pesquisa)
  }

  function avancarPage() {
let pesquisa = itemPesquisa
    let valorPage = 1;
    if(data.page < data.total_pages){
        valorPage = data.page+1 
      }
      
    if(pesquisa.toString().includes("?")){
      pesquisa += `&page=${valorPage}`
    }else{
      pesquisa += `?page=${valorPage}`
    }
    setItemPesquisa(pesquisa)
  }

  return (
    <>
      <label>itens por página
        <input type="text" onChange={handleOnchegeItensPorPagina} value={itensPorPagina} />
      </label>
      <button onClick={handleOnClick}>Pesquisar</button>
      <ul>
        {
          arreyParaItemDaLista()
        }
      </ul>
      <span><button onClick={voltarPage}>voltarPage</button>{data.page}/{data.total_pages}<button onClick={avancarPage}>avançarPage</button></span>

    </>
  )
}
