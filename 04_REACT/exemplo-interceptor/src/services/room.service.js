import api from './base.service'

export async function createRoom(room) {
  return await api.post('/room', room)
}

export async function getRoom(id) {
  const response = await api.get('/room/' + id)
  return response?.data
}

export default {
  createRoom,
  getRoom
}