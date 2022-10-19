import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/index';
import Landing from './Pages/Landing';
import { useContext, useEffect } from 'react';
import { Context } from './context/AppContext';

function App() {
  const { state, setDid, initDwnClient } = useContext(Context);
  useEffect(() => {
    if (state.did) {
      initDwnClient();
      return;
    }
    setDid();
  }, [state.did]);

  return (
    <Routes>
      {/* <Route path="/" element={<Landing />} /> */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
