<script>
  import Circle from "./Circle.svelte";
  import Cross from "./Cross.svelte";
  export let value;

</script>

{#if value != undefined}
    {#if value}
      <Circle/>
    {:else}
      <Cross/>
    {/if}
{/if}
