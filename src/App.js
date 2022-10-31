import { Routes, Route } from 'react-router-dom'
import { GameScreen } from './screens/Game-screen';
import { StartScreen } from './screens/Start-screen';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/gamescreen" element={<GameScreen />} />
      {/* <Route path="*" element={<Notfoundpage />} /> */}
    </Routes>
  );
}

export default App;
