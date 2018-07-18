import { FETCHED_DETAILED_TICKET } from "../actions/tickets";
import { UPDATE_TICKET } from "../actions/tickets";

export default function(state = [], action) {
  switch (action.type) {
    case FETCHED_DETAILED_TICKET:
      return action.payload;
    case UPDATE_TICKET:
      if (action.payload.id === state.id) {
        return action.payload;
      } else return state;
    default:
      return state;
  }
}
