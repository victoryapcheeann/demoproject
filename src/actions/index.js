export function addPlayer(player) {
    return {
      type: 'ADD_PLAYER',
      payload: player
    };
  }

export function removePlayer(player) {
    return {
      type: 'REMOVE_PLAYER',
      payload: player
    };
  } 