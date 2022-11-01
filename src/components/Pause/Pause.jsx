import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Pause.module.scss'

export const Pause = () => {
  return (

    <Link to="/pausescreen">
      <button className={styles.pause}>Пауза</button>
    </Link>


  )
}