<script>

  import Piece from './Piece.svelte';
  import { game } from '../stores/game.js';
  import Circle from './Circle.svelte';
  import Cross from './Cross.svelte';
  import { fly, crossfade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { sleep } from '../utils/utils.js'
  import { afterUpdate, tick } from 'svelte';

  const [send, recieve] = crossfade({
		duration: d => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

  let currentAnimation = false;
  let moving = false;
  let index;

  async function makeMove(i) {
    index = i;
    moving = true;
    await sleep(1000);
    moving = false;
    game.move(i);
  }

  afterUpdate(() => {
    console.log(moving, currentAnimation, $game.finished);
  });

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
    align-items: center;
    width: 100%;
    height: 40px;
    font-weight: 800;
  }

  .message > .svg-wrapper{
    width: 30px;
    height: 30px;
  }

  .current-move {
    position: absolute;
    width: 50vmin;
    height: 50vmin;
    left: calc(50vw - 25vmin);
    top: calc(50vh - 25vmin);
  } 
  .board-space {
    width: 100%;
    height: 100%;
    background-color: white;
  } 
</style>
<div class="wrapper">
  <div class="board">
    {#each $game.board as piece, i}
      <div class="board-space" on:click={() => { if(!(moving||currentAnimation||$game.finished)) makeMove(i); }}>
        {#if piece != undefined}
          <div in:recieve={{key: i}}>
            <Piece value={piece}/>
          </div>
        {/if}
      </div>
    {/each}

  </div>
  <div class="message">
  {#if $game.finished}
    <button on:click={() => { game.reset($game.player)}}>
      Reset
    </button>
    {#if $game.win}
    <div class="svg-wrapper">
      {#if $game.player}
        <Cross/>
      {:else}
        <Circle/>
      {/if}
    </div>
    &nbsp;won!
    {/if}
  {/if}
  </div>
</div>
{#if moving}
  {#if $game.player}
    <div class="current-move" in:fly="{{ y: 200, duration: 200 }}" out:send={{key: index}} on:introstart={() => {currentAnimation = true;}} on:outroend={() => {currentAnimation = false;}}>
      <Circle/>
    </div>
  {:else}
    <div class="current-move" in:fly="{{ y: 200, duration: 200 }}" out:send={{key: index}} on:introstart={() => {currentAnimation = true;}} on:outroend={() => {currentAnimation = false;}}>
      <Cross/>
    </div>
  {/if}
{/if}

