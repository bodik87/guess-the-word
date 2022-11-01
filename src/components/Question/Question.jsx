import React from 'react'
import { useSelector } from 'react-redux'
import { questions } from '../../data/questions'
import styles from './Question.module.scss'


export const Question = () => {

  const { activeQuestionIndex } = useSelector(store => store.game)
  const question = questions.months[activeQuestionIndex].question

  return (
    <div className={styles.question}>{question}</div>
  )
}