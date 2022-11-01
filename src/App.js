import { Routes, Route } from 'react-router-dom'
import { StartScreen } from './screens/Start-screen';
import { GameScreen } from './screens/Game-screen';
import { PauseScreen } from './screens/Pause-screen/Pause-screen';
import { useDispatch, useSelector } from 'react-redux';
import { questions } from './data/questions';
import { changeActiveQuestionIndex } from './store/game/gameSlice';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();
  const { activeCategory } = useSelector(store => store.game)
  const activeIndex = (Math.random() * ((questions[activeCategory].length - 1) - 0) + 0).toFixed(0)

  useEffect(() => {
    dispatch(changeActiveQuestionIndex(activeIndex))
  }, [activeCategory])

  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/gamescreen" element={<GameScreen />} />
      <Route path="/pausescreen" element={<PauseScreen />} />
      {/* <Route path="*" element={<Notfoundpage />} /> */}
    </Routes>
  );
}

export default App;
