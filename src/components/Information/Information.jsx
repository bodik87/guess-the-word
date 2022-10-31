import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './Information.module.scss'


export const Information = () => {

  const { informationMessage } = useSelector(store => store.word)

  return (
    <div className={styles.information}>{informationMessage}</div>
  )
}