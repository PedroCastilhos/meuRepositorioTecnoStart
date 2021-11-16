import api from './base.service'

export default async function login(username, password) {
  const response = await api.post('/login', { username, password })
  localStorage.setItem('TOKEN', response?.data?.token)
}