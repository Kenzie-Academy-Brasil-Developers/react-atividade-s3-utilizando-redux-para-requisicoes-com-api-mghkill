import addDigimon from "./actions";

const addDigimonThunk = (digimonArray) => {
  return (dispatch, getState) => {
    const { digimon } = getState();
    const updateDigimonArray = [...digimon, digimonArray[0]];
    dispatch(addDigimon(updateDigimonArray));
  };
};
export default addDigimonThunk;
