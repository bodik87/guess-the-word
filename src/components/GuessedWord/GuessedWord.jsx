import { useSelector } from 'react-redux'
import { questions } from '../../data/questions'
import { GuessedLetter } from '../GuessedLetter'
import { HiddenLetter } from '../HiddenLetter'
import styles from './GuessedWord.module.scss'

export const GuessedWord = () => {
  const { activeQuestionIndex } = useSelector(store => store.game)
  const answer = questions.months[activeQuestionIndex].answer.toUpperCase().split('')
  const guessedLetters = useSelector(store => store.word.guessedLetters)

  return (
    <div className={styles.guessedWord}>
      {answer.map((letter, index) =>
        guessedLetters.includes(letter.toLowerCase()) ?
          (<GuessedLetter key={index + letter}>{letter}</GuessedLetter>) :
          (<HiddenLetter key={index + letter}>{letter}</HiddenLetter>))}
    </div>
  )
}