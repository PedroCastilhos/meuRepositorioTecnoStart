import api from './base.service'

export default async function getQuestions() {
  const response = await api.get('/question')
  return response?.data
}