<script lang="ts">
  import Cell from 'Components/Cell.svelte'
  import { messageList } from 'Derived/MessageDerived'
</script>

<div class="wrapper">
  {#each $messageList as message, index}
    <Cell
      message={message}
      prevMessage={$messageList[index-1]}
      nextMessage={$messageList[index+1]}
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
