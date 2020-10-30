<script>
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
      <!-- <svg width="100%" height="100%"> -->
      <svg viewBox="0 0 100 100" style="display: block;">
        <circle cx="50%" cy="50%" r="{(svgSize/2) - svgWidth}%" stroke="black" stroke-width="{svgWidth}%" fill-opacity="0"/>
      </svg> 
    {:else}
      <svg viewBox="0 0 100 100" style="display: block;">
        <rect x="25%" y="{(100-svgWidth)/2}%" width="{svgSize}%" height="{svgWidth}%" style="fill:rgb(0,0,0);stroke-width:0;stroke:rgb(0,0,0)" transform-origin="center center" transform="rotate(45)"/>
        <rect x="25%" y="{(100-svgWidth)/2}%" width="{svgSize}%" height="{svgWidth}%" style="fill:rgb(0,0,0);stroke-width:0;stroke:rgb(0,0,0)" transform-origin="center center" transform="rotate(-45)"/>
      </svg>
    {/if}
  {/if}
</div>