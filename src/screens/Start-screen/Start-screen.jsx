import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { changeActiveCategory } from '../../store/game/gameSlice';
import styles from './Start-screen.module.scss'

export const StartScreen = () => {

  const dispatch = useDispatch();
  const [value, setValue] = useState('months')
  useEffect(() => {
    dispatch(changeActiveCategory(value))
  }, [dispatch])

  return (
    <div className={styles.startScreen}>
      <h2 className={styles.startScreen_themeTitle}>Обери тему гри</h2>
      <select onChange={(e) => setValue(e.target.value)}>
        <option value="months">Місяці</option>
        <option value="computers">Компьютери</option>
        <option value="animals">Тварини</option>
      </select>
      <Link to="/gamescreen">Почати нову гру</Link>
    </div>
  )
}