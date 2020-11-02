<script>
  import Circle from "./Circle.svelte";
  import Cross from "./Cross.svelte";
  export let value;

  let svgSize = 50;
  let svgWidth = 5;

</script>

<style>
  .piece {
    width: 100%;
    height: 100%;
    background-color: white;
  }
</style>

<div class="piece" on:click>
  {#if value != undefined}
    {#if value}
      <Circle/>
    {:else}
      <Cross/>
    {/if}
  {/if}
</div>