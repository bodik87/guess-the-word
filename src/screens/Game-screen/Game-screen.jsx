import { useState } from 'react'
import { useSelector } from 'react-redux'
import { GuessedWord } from '../../components/GuessedWord'
import { Keyboard } from '../../components/Keyboard'
import { Players } from '../../components/Players'
import { Question } from '../../components/Question'
import { Information } from '../../components/Information'
import { Pause } from '../../components/Pause'
import { Result } from '../../components/Result'
import { questions } from '../../data/questions'
import { Spinner } from '../../components/Spinner'
import styled from 'styled-components'
import styles from './Game-screen.module.scss'

export const GameScreen = () => {

  const { firstPlayerScore, secondPlayerScore } = useSelector(store => store.player)
  const { activeCategory, activeQuestionIndex } = useSelector(store => store.game)

  const [spinner, setSpinner] = useState(false)

  const answer = questions[activeCategory][activeQuestionIndex].answer.toUpperCase().split('')
  const totalScore = firstPlayerScore + secondPlayerScore
  const gameFinished = totalScore === answer.length

  const Button = styled.button`
  position: absolute;
  bottom: 40px;
  right: 40px;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 8px;
`;

  return (
    <>
      {gameFinished ? <Result /> :
        <div className={styles.gameScreen}>
          <Information />
          <Pause />
          <Players />
          <Question />
          <GuessedWord />
          {spinner ? <Spinner /> : <Keyboard />}
          <Button onClick={() => { setSpinner(!spinner) }}>Spinner</Button>
        </div>
      }
    </>
  )
}