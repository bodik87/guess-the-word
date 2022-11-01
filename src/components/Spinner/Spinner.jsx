import styled, { keyframes } from 'styled-components';
import styles from './Spinner.module.scss'

export const Spinner = () => {
  let degrees = (Math.random() * (1000 - 240) + 240);
  let seconds = (Math.random() * (6 - 4) + 4);

  const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(${degrees}deg);}
`;

  const Container = styled.div`
  position: absolute;
  top: 62%;
  left: 10%;
  background-color: rgb(255, 253, 242);
  border-radius: 50%;
  text-align: center;
  width: 400px;
  height: 400px;
  z-index: 1;
  overflow: hidden;
  animation: ${rotate} ${seconds}s ease-in-out forwards;
`;

  return (
    <Container>
      <div className={styles.spinner_one}>Пропустити хід</div>
      <div className={styles.spinner_two}>2</div>
      <div className={styles.spinner_three}>3</div>
      <div className={styles.spinner_four}>4</div>
    </Container>
  )
}