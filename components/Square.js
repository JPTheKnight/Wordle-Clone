import { useState } from "react";
import styles from "../styles/square.module.css";
import otherstyles from "../styles/key.module.css";

const Square = ({ letter, chosenWord, num, enter, setenter }) => {
  const [x, setX] = useState(styles.square);
  const [set, setSet] = useState(false);

  if (letter && !set && enter) {
    if (letter.toLowerCase() == chosenWord[num].toLowerCase()) {
      setX(styles.square_green);
      document
        .querySelector(`.${letter}`)
        .classList.remove(otherstyles.key_yellow);
      document.querySelector(`.${letter}`).classList.add(otherstyles.key_green);
      setenter(false);
    } else if (
      chosenWord.toLowerCase().split("").includes(letter.toLowerCase())
    ) {
      setX(styles.square_yellow);
      document
        .querySelector(`.${letter}`)
        .classList.add(otherstyles.key_yellow);
      setenter(false);
    } else {
      setX(styles.square);
      document.querySelector(`.${letter}`).classList.add(otherstyles.key_gray);
      setenter(false);
    }
    setSet(true);
  }
  return <div className={x}>{letter}</div>;
};

export default Square;
