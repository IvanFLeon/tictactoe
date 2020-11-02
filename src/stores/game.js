import { writable } from 'svelte/store';
import { compare } from '../utils/utils.js'

function createGame() {

  //Data:
  //finished: Represents if game is over
  //board: Represents each piece x(false)/o(true)/empty(undefined)
  //player: x(false)/o(true)
  //win: Game is always winnable unless game is drawn
	const { subscribe, set, update } = writable({
    finished: false,
    board: new Array(9),
    player: false,
    win: true
  });



	return {
    subscribe,
    move(i) {
      update((state) => {
        if (!state.finished) {
          //Update the board with new piece
          if (state.board[i] == undefined) {
            state.board[i] = state.player;
            state.player = !state.player;
          }


          //Check if game is over(win/lose) or no more moves
          
          //Check if available spaces for next move
          if (!state.board.includes(undefined)) {
            state.finished = true;
            state.win = false;
            return state;
          }

          //Check for diagonal completion
          if (i % 2 == 0) {
            
            if ( i % 4 == 2 || i == 4) {
              state.finished = compare(state.board[2], state.board[4], state.board[6]) || state.finished;
            }

            if ( i % 4 == 0) {
              state.finished = compare(state.board[0], state.board[4], state.board[8]) || state.finished;
            }

          }
          //Check row completion
          var temp = Math.floor(i/3)*3;
          state.finished = compare(state.board[temp], state.board[temp+1], state.board[temp+2]) || state.finished;

          //Check column completion
          var temp = (i%3);
          state.finished = compare(state.board[temp], state.board[temp+3], state.board[temp+6]) || state.finished;
        }

        return state;
      });
    },
    reset(player) {
      set({
        finished: false,
        board: new Array(9),
        player,
        win: true
      });
    }
	};
}

export const game = createGame();