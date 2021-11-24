import { useSelector } from "react-redux";
import Digimon from "../Digimon";
import "./styles.css";
const DigimonList = () => {
  const digimonList = useSelector((store) => store.digimon);

  return (
    <div className="conteiner-list">
      {digimonList.map((digimonObj, index) => {
        return (
          <>
            <Digimon key={index} digimonObj={digimonObj} />
          </>
        );
      })}
    </div>
  );
};

export default DigimonList;
