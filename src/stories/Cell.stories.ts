/* Internal */
import Cell from 'Components/Cell.svelte'
import Message from 'Models/Message'

export default {
  title: 'Cell',
  component: Cell,
  parameters: {
    layout: 'centered',
  },
}

const Template = (props) => ({
  Component: Cell,
  props,
})

export const Primary = Template.bind({})
Primary.args = {
  message: new Message({ content: 'hello', author: 'me' }),
}
