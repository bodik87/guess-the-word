import styles from './HiddenLetter.module.scss'

export const HiddenLetter = ({ children }) => {

  return (
    <div className={styles.hiddenLetter}>
      {children}
    </div>
  )
}