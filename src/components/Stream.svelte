<script lang="ts">
  import Cell from 'Components/Cell'
  import Message from 'Models/Message'
  
  export let messages: Message[] = []
</script>

<div class="wrapper">
  {#each messages as message, index}
    <Cell
      message={message}
      prevMessage={messages[index-1]}
      nextMessage={messages[index+1]}
    />
  {/each}
</div>

<style type="text/scss">
  .wrapper {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
</style>
