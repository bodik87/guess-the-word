import { useSelector } from 'react-redux'
import { GuessedWord } from '../../components/GuessedWord'
import { Keyboard } from '../../components/Keyboard'
import { Players } from '../../components/Players'
import { Question } from '../../components/Question'
import { Information } from '../../components/Information'
import { Pause } from '../../components/Pause'
import { Result } from '../../components/Result'
import { questions } from '../../data/questions'
import styles from './Game-screen.module.scss'
import { Spinner } from '../../components/Spinner/Spinner'

export const GameScreen = () => {

  const { firstPlayerScore, secondPlayerScore } = useSelector(store => store.player)
  const { activeCategory, activeQuestionIndex } = useSelector(store => store.game)

  const answer = questions[activeCategory][activeQuestionIndex].answer.toUpperCase().split('')
  const totalScore = firstPlayerScore + secondPlayerScore
  const gameFinished = totalScore === answer.length

  return (
    <>
      {gameFinished ? <Result /> :
        <div className={styles.gameScreen}>
          <Information />
          <Pause />
          <Players />
          <Question />
          <GuessedWord />
          <Spinner />
          <Keyboard />
        </div>
      }
    </>
  )
}