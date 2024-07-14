import React, { useEffect, useState } from "react";
import diamond from "../assets/diamond.svg";
import bombImg from "../assets/bomb.svg";

const Box = ({ setPoint, gameOver, setGameOver, bomb, resetFlag }) => {
  const [image, setImage] = useState(null);
  let diamondSound = new Audio("/diamond.mp3");
  let bombSound = new Audio("/bomb.mp3");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(false);
    setImage(null);
  }, [resetFlag]);

  const Clicked = () => {
    if (gameOver || isClicked) return;
    if (bomb) {
      bombSound.play();
      setGameOver(true);
      return;
    }
    setPoint((prev) => {
      return prev + 100;
    });
    setImage(diamond);
    diamondSound.play();
  };

  useEffect(() => {
    if (gameOver) {
      if (bomb) {
        setImage(bombImg);
      } else setImage(diamond);
    }
  }, [gameOver, bomb]);

  return (
    <div
      className="min-w-14 min-h-14 w-1/6 h-1/6 cursor-pointer my-1 md:p-3 p-1  bg-[#2f4553] rounded-lg font-semibold shadow-3xl hover:-translate-y-1 hover:bg-[#557086]"
      onClick={Clicked}
    >
      {image && <img src={image} alt="Diamond or Bomb" content="fit" />}
    </div>
  );
};

export default Box;
