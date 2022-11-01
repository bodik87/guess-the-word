import { Link, useNavigate } from 'react-router-dom'
import styles from './Pause-screen.module.scss'

export const PauseScreen = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.pauseScreen}>
      <a href="/">Почати нову гру</a>
      <button className={styles.backToGame} onClick={() => navigate(-1)}>Повернутися до поточної гри</button>
    </div>
  )
}