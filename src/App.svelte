<script>
  import Game from './components/Game.svelte';
</script>

<style>
  :global(html) {
    font-family: 'PT Sans', sans-serif;
  }
  /* :global(body) {
    height: 100vh;
  } */
  .app {
    height: 90vh;
  }

  .title {
    font-family: 'Fredoka One', cursive;
    font-size: 4em;
    width: 100%;
    text-align: center;
  }
</style>

<div class="app">
  <h1 class="title">Tic Tac Toe</h1>
  <Game/>
</div>
