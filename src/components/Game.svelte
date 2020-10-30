<script>

  import Piece from './Piece.svelte';
  import { game } from '../stores/game.js';

</script>

<style>
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .board {
    background-color: #333;
    width: 70vmin;
    height: 70vmin;
    display: grid;
    column-gap: 1vmin;
    row-gap: 1vmin;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  .message {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 40px;
  }
</style>
<div class="wrapper">
  <div class="board">
    {#each $game.board as piece, i}
      <Piece value={piece} on:click={() => { game.move(i) }}/>
    {/each}

  </div>
  <div class="message">
  {#if $game.finished}
      {!$game.player} won
  {/if}
  </div>
</div>
