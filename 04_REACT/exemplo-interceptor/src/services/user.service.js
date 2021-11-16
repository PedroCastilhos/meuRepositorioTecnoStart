import api from './base.service'

export default async function getUser() {
  const response = await api.get('/user/me')
  return response?.data
}