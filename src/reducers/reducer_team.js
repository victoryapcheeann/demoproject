const initialTeamState = []

export default function(state = initialTeamState, action) {  
    let i = action.payload; 
    
    switch (action.type) {
      case 'ADD_PLAYER': 
        return [
            ...state, i
        ]
      case 'REMOVE_PLAYER':  
        return state.filter(({ ID }) => ID !== i.ID)
        
      default: 
        return state;
    }
  }