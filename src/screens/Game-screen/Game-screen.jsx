import { GuessedWord } from '../../components/GuessedWord'
import { Keyboard } from '../../components/Keyboard'
import { Players } from '../../components/Players'
import { Question } from '../../components/Question'
import { Information } from '../../components/Information'
import styles from './Game-screen.module.scss'
import { NewGame } from '../../components/NewGame/NewGame'

export const GameScreen = () => {
  return (
    <div className={styles.gameScreen}>
      <Information />
      <NewGame />
      <Players />
      <Question />
      <GuessedWord />
      <Keyboard />
    </div>
  )
}