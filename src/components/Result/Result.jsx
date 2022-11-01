import React from 'react'
import { useSelector } from 'react-redux'
import { questions } from '../../data/questions'
import styles from './Result.module.scss'


export const Result = () => {
  const { activePlayer, firstPlayerScore, secondPlayerScore } = useSelector(store => store.player)

  const { activeCategory, activeQuestionIndex } = useSelector(store => store.game)
  const answer = questions[activeCategory][activeQuestionIndex].answer
  // const isFirstWinner = firstPlayerScore > secondPlayerScore //если количество очков
  return (
    <div className={styles.result}>
      <h2>Переміг {activePlayer ? 'перший' : 'другий'} гравець</h2>
      {/* <h3>з результатом {firstPlayerScore} : {secondPlayerScore}</h3> */}
      <h3>вгадавши слово <i>{answer}</i></h3>
      <a href="/">Почати нову гру</a>
    </div>
  )
}