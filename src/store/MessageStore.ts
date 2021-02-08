import { writable } from 'svelte/store'

import Message from 'Models/Message'
import MessageAPI from 'Api/MessageAPI'

interface IMessageStore {
  messages: any[]
  hasError: boolean
}

const initialMessageStore: IMessageStore = {
  messages: [],
  hasError: false,
}

function createMessageStore() {
  const { subscribe, update } = writable(initialMessageStore)
  
  return {
    subscribe,
    async getMessages(postId: string) {
      try {
        const messages = await MessageAPI.getMessages(postId)
        const modeledResult = messages.map(message => (
          new Message({
            content: message.body,
            author: message.email,
          })
        ))
        
        update(prevState => ({
          ...prevState,
          messages: modeledResult,
        }))
      } catch (error) {
        update(prevState => ({
          ...prevState,
          hasError: true,
        }))
      }
    },
  }
}

export const messageStore = createMessageStore()
