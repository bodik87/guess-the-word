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

export const GameScreen = () => {

  const { firstPlayerScore, secondPlayerScore } = useSelector(store => store.player)
  const { activeCategory, activeQuestionIndex } = useSelector(store => store.game)

  console.log(activeCategory);

  const answer = questions.months[activeQuestionIndex].answer.toUpperCase().split('')
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
          <Keyboard />
        </div>
      }
    </>
  )
}