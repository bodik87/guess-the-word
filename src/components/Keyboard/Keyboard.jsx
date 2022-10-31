import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ukrainianAlphabet } from '../../data/alphabet'
import { questions } from '../../data/questions';
import { pushToGuessedLetters, pushToSelectedLetters, setGameOver, setInformationMessage, toggleActivePlayer } from '../../store/word/wordSlice';
import styles from './Keyboard.module.scss'

export const Keyboard = () => {

  const dispatch = useDispatch();

  const answer = questions[0].answer.toUpperCase().split('')
  const { guessedLetters, selectedLetters, gameOver } = useSelector(store => store.word)
  const uniqueAnswerLettersLength = [...new Set([...answer])].length
  const uniqueGuessedLettersLength = guessedLetters.length
  const guessed = uniqueAnswerLettersLength === uniqueGuessedLettersLength

  const handleClick = (e) => {
    const letter = e.target.innerHTML.toLowerCase()
    const isLetterInAnswer = answer.join('').toLowerCase().split('').includes(letter)
    const isLetterInSelectedLetters = selectedLetters.includes(letter)

    if (isLetterInAnswer) {
      dispatch(pushToGuessedLetters(letter))
      dispatch(setInformationMessage('Правильно! Ходіть знову!'))
    } else {
      dispatch(setInformationMessage('Немає такої літери - ходить інший гравець'))
      dispatch(toggleActivePlayer())
    }

    if (!isLetterInSelectedLetters) {
      dispatch(pushToSelectedLetters(e.target.innerHTML.toLowerCase()))
    } else { dispatch(setInformationMessage('Гра скінчилась!')) }
  }

  console.log(gameOver);

  const keyboardStyle = guessed ? styles.keys_hide : styles.keys

  return (
    <div className={keyboardStyle}>
      <p className={styles.keys_title}>Введiть лiтеру</p>
      <div className={styles.keys_grid}>
        {
          ukrainianAlphabet.map(letter =>
            selectedLetters.includes(letter.toLowerCase()) ?
              (
                <button
                  key={letter}
                  className={styles.keys_hidden}>{letter}
                </button>
              ) : (
                <button
                  key={letter}
                  className={styles.keys_letter}
                  onClick={handleClick}>{letter}
                </button>
              )
          )
        }
      </div>
      <div className={styles.buttonsRow}>
        <button className={styles.button_ok}>OK</button>
        <button className={styles.button_back}>Назад</button>
        <button className={styles.button_cancel}>Вiдмiнити</button>
      </div>
    </div>
  )
}