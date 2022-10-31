import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Players.module.scss'


export const Players = () => {

  const { activePlayer } = useSelector(store => store.word)

  return (
    <div className={styles.players}>
      <div className={activePlayer ? styles.player_first_active : styles.player_first}>1</div>
      <div className={activePlayer ? styles.player_second : styles.player_second_active}>2</div>
    </div>
  )
}