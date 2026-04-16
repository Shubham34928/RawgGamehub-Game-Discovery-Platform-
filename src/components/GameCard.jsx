import "../styles/GameCard.css";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const icondetails = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
};

function GameCard({ image, name, platforms, cardId, rating, ratingslug }) {
  return (
    <>
      <div className="card">
        <Link to={`/games/${cardId}`}>
          <div className="imagesection">
            <img
              className="image"
              src={image || "/placeholder.png"}
              alt={`${name} Background Image`}
            />
          </div>
        </Link>
        <div className="titlesection">
          <p className="name">{name}</p>

          <div className="rating_logo">
            <div className="platformicons">
              {platforms?.map((ele) => {
                let Icon = icondetails[ele.platform.slug];
                return Icon ? <Icon key={ele.platform.id} /> : null;
              })}
            </div>
            <p
              className={
                ratingslug === "mature"
                  ? "red"
                  : ratingslug === "teen"
                    ? "green"
                    : ratingslug === "adults-only"
                      ? "red"
                      : ratingslug === "everyone" ||
                          ratingslug === "everyone-10-plus"
                        ? "green"
                        : "grey"
              }
            >
              {ratingslug === "mature"
                ? "18+"
                : ratingslug === "teen"
                  ? "13+"
                  : ratingslug === "adults-only"
                    ? "20+"
                    : ratingslug === "everyone" ||
                        ratingslug === "everyone-10-plus"
                      ? "10+"
                      : "NA"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameCard;
