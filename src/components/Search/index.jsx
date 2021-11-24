import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import api from "../../services/api";
import addDigimonThunk from "../../store/modules/digimon/thunks";
import "./styles.css";
const Search = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleAddDigimon = () => {
    if (!input) {
      return toast.error("Digimon não encontrado!");
    }
    api
      .get(`/name/${input}`)
      .then((response) => dispatch(addDigimonThunk(response.data)))
      .catch((err) => toast.error("Digimon não encontrado!"));
  };

  return (
    <div className="conteiner-search">
      <div>
        <h2>Procure pelo seu Digimon!</h2>
      </div>
      <div className="form-div">
        <input
          placeholder="Digimon"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button onClick={handleAddDigimon}>Buscar</button>
      </div>
    </div>
  );
};

export default Search;
