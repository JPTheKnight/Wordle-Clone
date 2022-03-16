import styles from "../styles/key.module.css";

const Key = ({ letter, word, setWord, big, enter }) => {
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
      } else {
        alert("NOT ENOUGH LETTERS MAN C'MON");
      }
    }
  };

  return (
    <div
      className={!big ? styles.key : styles.keybig}
      onClick={() => {
        letterPressed();
      }}
    >
      {letter}
    </div>
  );
};

export default Key;
