import { useEffect, useState } from "react";
import styles from "../styles/key.module.css";
import otherstyles from "../styles/Home.module.css";

const Key = ({
  letter,
  word,
  setWord,
  big,
  enter,
  used,
  enterPressed,
  chosenWord,
}) => {
  const [x, setX] = useState(styles.key);

  const letterPressed = () => {
    if (!enter) {
      if (word.length < 5 && !big) {
        setWord(word + letter);
      } else if (word.length <= 5 && big) {
        setWord(word.slice(0, word.length - 1));
      }
    } else {
      if (word.length == 5) {
        setWord(word + "/");
        if (document.getElementsByClassName(otherstyles.row_anim)[0])
          document
            .getElementsByClassName(otherstyles.row_working)[0]
            .classList.toggle(otherstyles.row_anim);
      } else {
        alert("NOT ENOUGH LETTERS MAN C'MON");
      }
    }
  };

  return (
    <div
      className={`${!big ? x : styles.keybig} ${letter}`}
      onClick={() => {
        letterPressed();
      }}
    >
      {letter}
    </div>
  );
};

export default Key;
