import { derived } from 'svelte/store'

import { messageStore } from 'Store/MessageStore'

export const messageList = derived(
  messageStore,
  store => store.messages,
)
