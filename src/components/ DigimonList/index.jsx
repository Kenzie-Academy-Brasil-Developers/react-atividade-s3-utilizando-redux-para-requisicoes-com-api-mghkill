import { useSelector } from "react-redux";
import "./styles.css";
const DigimonList = () => {
  const digimonList = useSelector((store) => store.digimon);

  return (
    <div className="conteiner-list">
      {digimonList.map((digimonObj, index) => {
        return (
          <div className="conteiner-list-card" key={index}>
            <img className="list-img" src={digimonObj.img} alt="logo" />
            <div className="list-span">
              <span> {digimonObj.name} </span>
              <span> {digimonObj.level} </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DigimonList;
