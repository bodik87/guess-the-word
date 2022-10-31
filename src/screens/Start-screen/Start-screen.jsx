import { Link } from 'react-router-dom'
import { NewGame } from '../../components/NewGame/NewGame'
import styles from './Start-screen.module.scss'

export const StartScreen = () => {
  return (
    <div className={styles.startScreen}>
      <Link to="/gamescreen">Почати гру</Link>
    </div>
  )
}