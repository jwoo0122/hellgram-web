interface MessageArgs {
  content?: string
  author?: string
}

class Message {
  content: string = ''
  
  author: string = ''
  
  constructor({
    content = '',
    author = '',
  }: MessageArgs = {}) {
    this.content = content?.trim()
    this.author = author
  }
  
  isMine() {
    // TODO: Move this logic to selector
    return this.author === 'me'
  }
}

export default Message
