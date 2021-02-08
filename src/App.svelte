<script lang='ts'>
  import Stream from 'Components/Stream.svelte'
  import { messageStore } from 'Store/MessageStore'
</script>

<button on:click={() => messageStore.getMessages()}>
  Fetch
</button>
<Stream />
