import { useDispatch, useSelector } from 'react-redux';
import { ukrainianAlphabet } from '../../data/alphabet'
import { questions } from '../../data/questions';
import { pushToGuessedLetters, pushToSelectedLetters, setInformationMessage } from '../../store/word/wordSlice';
import { increaseFirstScore, increaseSecondScore, toggleActivePlayer } from '../../store/player/playerSlice'
import styles from './Keyboard.module.scss'

export const Keyboard = () => {

  const dispatch = useDispatch();
  const { selectedLetters } = useSelector(store => store.word)
  const { activePlayer } = useSelector(store => store.player)

  const answer = questions[0].answer.toUpperCase().split('')

  const handleClick = (e) => {
    const letter = e.target.innerHTML.toLowerCase()
    const isLetterInAnswer = answer.join('').toLowerCase().split('').includes(letter)
    const isLetterInSelectedLetters = selectedLetters.includes(letter)

    if (isLetterInAnswer) {
      if (activePlayer) {
        dispatch(pushToGuessedLetters(letter))
        dispatch(setInformationMessage('Перший гравець відповів правильно! Він ходить знову!'))
        dispatch(increaseFirstScore())
      }
      if (!activePlayer) {
        dispatch(pushToGuessedLetters(letter))
        dispatch(setInformationMessage('Другий гравець відповів вірно! Він ходить знову!'))
        dispatch(increaseSecondScore())
      }
    } else {
      dispatch(setInformationMessage('Немає такої літери - ходить інший гравець'))
      dispatch(toggleActivePlayer())
    }

    if (!isLetterInSelectedLetters) {
      dispatch(pushToSelectedLetters(e.target.innerHTML.toLowerCase()))
    }
  }

  return (
    <div className={styles.keys}>
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