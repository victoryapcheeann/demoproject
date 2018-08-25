import { combineReducers } from "redux";
import PlayerReducer from "./reducer_player";
import TeamReducer from "./reducer_team";

const rootReducer = combineReducers({
  players: PlayerReducer,
  team: TeamReducer
});

export default rootReducer;