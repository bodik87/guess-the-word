import { GuessedWord } from '../../components/GuessedWord/GuessedWord'
import { Keyboard } from '../../components/Keyboard'
import { Players } from '../../components/Players/Players'
import styles from './Game-screen.module.scss'

export const GameScreen = () => {

  return (
    <div className={styles.gameScreen}>
      <Players />
      <GuessedWord />
      <Keyboard />
    </div>
  )
}