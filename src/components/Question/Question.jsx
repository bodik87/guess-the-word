import React from 'react'
import { questions } from '../../data/questions'
import styles from './Question.module.scss'


export const Question = () => {

  const question = questions[0].question

  return (
    <div className={styles.question}>{question}</div>
  )
}