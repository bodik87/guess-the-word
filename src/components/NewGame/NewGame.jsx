import React from 'react'
import styles from './NewGame.module.scss'

export const NewGame = () => {
  return (
    <a href="/">
      <button className={styles.newGame}>Нова гра</button>
    </a>
  )
}