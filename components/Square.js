import { useState } from "react";
import styles from "../styles/square.module.css";

const Square = ({ letter, chosenWord, num, enter, setenter }) => {
  const [x, setX] = useState(styles.square);
  const [set, setSet] = useState(false);

  if (letter && !set && enter) {
    if (letter.toLowerCase() == chosenWord[num].toLowerCase()) {
      setX(styles.square_green);
      setenter(false);
    } else if (
      chosenWord.toLowerCase().split("").includes(letter.toLowerCase())
    ) {
      setX(styles.square_yellow);
      setenter(false);
    } else {
      setX(styles.square);
      setenter(false);
    }
    setSet(true);
  }
  return <div className={x}>{letter}</div>;
};

export default Square;
