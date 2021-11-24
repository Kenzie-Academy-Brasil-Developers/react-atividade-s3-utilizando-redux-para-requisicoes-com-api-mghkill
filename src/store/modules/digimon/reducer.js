import { ADD_DIGIMON } from "./actionsType";

const digimonsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DIGIMON:
      return action.updateDigimonArray;
    default:
      return state;
  }
};

export default digimonsReducer;
