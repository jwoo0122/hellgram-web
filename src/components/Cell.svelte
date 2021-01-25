<script lang="ts">
  export let message = ''
</script>

<div class="cell">
  <p>
    { message }
  </p>
</div>

<style type="text/scss">
  .cell {
    max-width: 100px;
    min-height: 50px;
    font-size: 16px;
    background-color: grey;
    border-radius: 25px;
    padding: 10px;
    box-sizing: border-box;
  }
</style>
