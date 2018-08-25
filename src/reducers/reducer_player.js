import players from '../data/player'

const initialPlayerState = players

export default function(state = initialPlayerState, action) {  
    let i = action.payload; 
    
    switch (action.type) {
      case 'ADD_PLAYER':  
        return state.filter(({ ID }) => ID !== i.ID)

      case 'REMOVE_PLAYER':  
        return [
            ...state, i
        ]
      default: 
        return state;
    }
  }