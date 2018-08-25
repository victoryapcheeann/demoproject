import players from '../data/player'

export default function(state = players, action) {  
    let i = action.payload; 
    
    switch (action.type) {
      case 'UPVOTE_TOPICS':  
        return [
          ...state.slice(0,i), // before the one we are updating, ensure that the state remains un changed
          {...state[i], 
            upvote: state[i].upvote + 1,
            totalVote: state[i].totalVote + 1
          },
          ...state.slice(i + 1) // after the one we are updating, ensure that the state remains un changed
        ]
      case 'DOWNVOTE_TOPICS':
          return [
            ...state.slice(0,i), // before the one we are updating
            {...state[i], 
              downvote: state[i].downvote + 1,
              totalVote: state[i].totalVote - 1
            },
            ...state.slice(i + 1) // after the one we are updating
          ]
      default: 
        return state;
    }
  }