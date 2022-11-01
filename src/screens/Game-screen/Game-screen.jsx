import { useSelector } from 'react-redux'
import { GuessedWord } from '../../components/GuessedWord'
import { Keyboard } from '../../components/Keyboard'
import { Players } from '../../components/Players'
import { Question } from '../../components/Question'
import { Information } from '../../components/Information'
import { NewGame } from '../../components/NewGame'
import { Result } from '../../components/Result'
import { questions } from '../../data/questions'
import styles from './Game-screen.module.scss'

export const GameScreen = () => {

  const answer = questions[0].answer.toUpperCase().split('')
  const { firstPlayerScore, secondPlayerScore } = useSelector(store => store.player)
  const totalScore = firstPlayerScore + secondPlayerScore
  const gameFinished = totalScore === answer.length

  return (
    <>
      {gameFinished ? <Result /> :
        <div className={styles.gameScreen}>
          <Information />
          <NewGame />
          <Players />
          <Question />
          <GuessedWord />
          <Keyboard />
        </div>
      }
    </>
  )
}