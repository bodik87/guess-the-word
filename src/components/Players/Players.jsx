import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Players.module.scss'


export const Players = () => {

  const { activePlayer, firstPlayerScore, secondPlayerScore } = useSelector(store => store.player)

  return (
    <div className={styles.players}>

      <div className={activePlayer ? styles.player_first_active : styles.player_first}>
        <div>Грав.1</div>
        <div>{firstPlayerScore}</div>
      </div>

      <div className={activePlayer ? styles.player_second : styles.player_second_active}>
        <div>Грав.2</div>
        <div>{secondPlayerScore}</div>
      </div>

    </div>
  )
}