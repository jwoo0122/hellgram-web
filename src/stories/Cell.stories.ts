/* Internal */
import Cell from 'Components/Cell.svelte'

export default {
  title: 'Cell',
  component: Cell,
}

const Template = (props) => ({
  Component: Cell,
  props,
})

export const Primary = Template.bind({})
Primary.args = {
  message: 'hello',
}
