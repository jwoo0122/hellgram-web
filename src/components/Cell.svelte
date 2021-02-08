<script lang="ts">
  import Message from 'Models/Message'
  
  export let message: Message = new Message()
  export let prevMessage: Message = new Message()
  export let nextMessage: Message = new Message()
  
  $: byMe = message.isMine()
  $: isContinuous = prevMessage.author === message.author
  $: willContinuous = nextMessage.author === message.author
  $: paragraphs = message.content.split('\n')
</script>

<div
  class="wrapper"
  class:byMe
>
  <div
    class="cell"
    class:byMe
    class:isContinuous
    class:willContinuous
  >
    {#each paragraphs as paragraph}
      <p>
        {#if paragraph === ''}
          <br />
        {:else}
          { paragraph }
        {/if}
      </p>
    {/each}
  </div>
</div>

<style type="text/scss">
  $small-radius: 5px;
  
  .wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    
    &.byMe {
      justify-content: flex-end;
    }
    
    &:not(:last-child) {
      margin-bottom: 3px;
    }
    
    .cell {
      width: fit-content;
      max-width: 200px;
      min-width: 30px;
      min-height: 25px;
      font-size: 16px;
      background-color: #f2f2f2; // TODO: Support Theming
      color: black; // TODO: Support Theming
      border-radius: 20px;
      padding: 8px;
      box-sizing: border-box;
      word-wrap: break-word;
      cursor: pointer;
      
      &.byMe {
        background-color: #BA2C2B; // TODO: Support Theming
        color: white; // TODO: Support Theming
        
        &.isContinuous {
          border-top-right-radius: $small-radius;
        }
        
        &.willContinuous {
          border-bottom-right-radius: $small-radius;
        }
      }
      
      p {
        margin: 0;
      }
      
      &:not(.byMe) {
        &.isContinuous {
          border-top-left-radius: $small-radius;
        }
        
        &.willContinuous {
          border-bottom-left-radius: $small-radius;
        }
      }
    }
  }
</style>
