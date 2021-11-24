import "./styles.css";
const Digimon = ({ digimonObj }) => {
  return (
    <div className="conteiner-list-card">
      <img className="list-img" src={digimonObj.img} alt="logo" />
      <div className="list-span">
        <span> {digimonObj.name} </span>
        <span> {digimonObj.level} </span>
      </div>
    </div>
  );
};
export default Digimon;
