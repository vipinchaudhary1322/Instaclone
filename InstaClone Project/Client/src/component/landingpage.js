import { useNavigate } from "react-router-dom";
import "./css/landingpage.css";
import diaphragm from "./image/land.jpg";

export default function Landingpage() {
  const nav = useNavigate();
  const gotopost = () => {
    nav("/postview");
  };
  return (
    <>
      <div id="main-container">
        <img id="image-side" src={diaphragm} alt="img"></img>
        <div id="rigthside">
          <h1>10x Team 04</h1>
          <button id="btn" onClick={gotopost}>
            <b>Enter</b>
          </button>
        </div>
      </div>
    </>
  );
}
