import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Result.module.scss'


export const Result = () => {
  const { firstPlayerScore, secondPlayerScore } = useSelector(store => store.player)
  const isFirstWinner = firstPlayerScore > secondPlayerScore
  return (
    <div className={styles.result}>
      <h2>Переміг {isFirstWinner ? 'перший' : 'другий'} гравець</h2>
      <h3>з результатом {firstPlayerScore} : {secondPlayerScore}</h3>
      <a href="/">Почати нову гру</a>
    </div>
  )
}