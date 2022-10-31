import styles from './GuessedLetter.module.scss'

export const GuessedLetter = ({ children }) => {

  return (
    <div className={styles.guessedLetter}>
      {children}
    </div>
  )
}