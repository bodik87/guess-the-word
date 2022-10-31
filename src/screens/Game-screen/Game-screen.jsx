import { useSelector } from 'react-redux'
import { GuessedWord } from '../../components/GuessedWord'
import { Keyboard } from '../../components/Keyboard'
import { Players } from '../../components/Players'
import { Question } from '../../components/Question'
import { Information } from '../../components/Information'
import { NewGame } from '../../components/NewGame'
import styles from './Game-screen.module.scss'

export const GameScreen = () => {
  const { gameOver } = useSelector(store => store.word)
  console.log(gameOver);
  return (
    <>
      {gameOver ? <NewGame /> :
        <div className={styles.gameScreen}>
          <Information />
          <NewGame />
          <Players />
          <Question />
          <GuessedWord />
          <Keyboard />
        </div>}
    </>
  )
}