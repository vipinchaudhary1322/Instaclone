import { useEffect, useState } from "react";
import "./css/Postview.css";
import img1 from "./image/icon.svg";
import camera from "./image/camera1.png";
import dot from "./image/more_icon.svg";
import { useNavigate } from "react-router-dom";

export default function Daa() {
  const nav = useNavigate();
  const gotoform = () => {
    nav("/form");
  };

  const [users, Setusers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://server--app.herokuapp.com/post");
    Setusers(await response.json());
  };
  useEffect(() => {
    getUsers();
    console.log(getUsers());
  }, []);
  return (
    <>
      <header>
        <img id="p1" src={img1} alt="img"></img>
        <p id="logot">Instaclone</p>
        <img
          id="cam"
          src={camera}
          alt="avtaar"
          onClick={gotoform}
          style={{ cursor: "pointer" }}
        ></img>
      </header>
      {users.map((Elem, i) => {
        return (
          <>
            <div key={i} id="lastcontainer">
              <div className="post">
                <div className="first">
                  <div className="infirst">
                    <div></div>
                    <p className="upperpara">
                      <b>{Elem.author}</b>
                    </p>
                    <p className="upperpara2">{Elem.location}</p>
                  </div>
                  <img id="p3" src={dot} alt="img"></img>
                </div>
                <div className="midp">
                  <img
                    id="p2"
                    src={`/uploads/${Elem.image}`}
                    alt="avtaar"
                  ></img>
                </div>
                <div className="thirdline">
                  <div className="inthirdline">
                    <div>
                      <i className="fa fa-heart" />
                    </div>
                    <div>
                      <i className="fa fa-paper-plane" />
                    </div>

                    <div>{Elem.date}</div>
                  </div>
                  <div>{Elem.likes}</div>
                </div>
                <div className="lastline">
                  <b>{Elem.description}</b>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
