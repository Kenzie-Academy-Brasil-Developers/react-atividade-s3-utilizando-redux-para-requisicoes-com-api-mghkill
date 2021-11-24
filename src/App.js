import { Toaster } from "react-hot-toast";
import "./App.css";
import DigimonList from "./components/ DigimonList";
import Search from "./components/Search";

function App() {
  return (
    <div className="app">
      <Toaster position="top-center" reverseOrder={false} />
      <Search />
      <DigimonList />
    </div>
  );
}

export default App;
