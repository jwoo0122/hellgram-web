import Stream from 'Components/Stream.svelte'
import Model from 'Models/Message'
import Message from '../models/Message'

export default {
  title: 'Stream',
  component: Stream,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (props) => ({
  Component: Stream,
  props,
})

export const Primary = Template.bind({})
Primary.args = {
  messages: [
    new Message({ content: 'hello', author: 'he' }),
    new Message({ content: 'hello', author: 'me' }),
    new Message({ content: 'hello', author: 'he' }),
    new Message({ content: 'hello', author: 'he' }),
    new Message({ content: 'hello', author: 'he' }),
    new Message({ content: 'hello', author: 'he' }),
    new Message({ content: 'hello', author: 'he' }),
    new Message({ content: 'hello', author: 'he' }),
    new Message({ content: 'hello', author: 'he' }),
    new Message({ content: 'hello', author: 'he' }),
    new Message({ content: 'hello', author: 'me' }),
    new Message({ content: 'hello', author: 'he' }),
    new Message({ content: 'hello', author: 'he' }),
    new Message({ content: 'hello', author: 'he' }),
    new Message({ content: 'hello', author: 'me' }),
    new Message({ content: 'hello', author: 'he' }),
    new Message({ content: 'hello', author: 'me' }),
    new Message({ content: 'hello', author: 'me' }),
    new Message({ content: 'hello', author: 'me' }),
    new Message({ content: 'hello', author: 'he' }),
  ]
}
