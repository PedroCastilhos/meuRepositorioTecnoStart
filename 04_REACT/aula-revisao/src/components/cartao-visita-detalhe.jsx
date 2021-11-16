import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import axios from "axios";

function CartaoVisitaDetalhe({ id }) {
  const [cartao, setCartao] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [novoAxios, setNovoAxios] = useState({});

  async function postJasonPlaceHolder() {
    axios.get(
      'https://tecno-start-api.herokuapp.com/v1/api/user'
    ).then(resultado => setNovoAxios(resultado)).then(resultado => console.log(resultado))
  }

  async function fetchCartao() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setCartao(data);
  }



  useEffect(() => {
    postJasonPlaceHolder()
    fetchCartao();
  }, []);

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <div>
      <span>{cartao.id}</span>
      <h2>{cartao.name}</h2>
      <p>{cartao.phone}</p>
      <p>{cartao.email}</p>

      <button type="button" onClick={openModal}>Modal</button>

      <Modal isOpen={isOpen} contentLabel="Example Modal">
        <button onClick={closeModal}>x</button>
        <img src="https://thispersondoesnotexist.com/image" style={{ width: '100px' }} alt="imagem aleatória de uma pessoa inexistente" />
      </Modal>

      <div>
        <h1>Novo Axios</h1>
        <p>{novoAxios.title}</p>
        {novoAxios.body}
        {novoAxios.userId}
        {novoAxios.id}
      </div>

    </div>
  );
}

export default CartaoVisitaDetalhe;
