import MessageField from 'Components/MessageField.svelte'

export default {
  title: 'MessageField',
  component: MessageField,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (props) => ({
  Component: MessageField,
  props,
})

export const Primary = Template.bind({})
