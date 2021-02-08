import client from './client'

export function getMessages(postId: string) {
  return client.get(`/comments/${postId}`)
}

export default {
  getMessages,
}
