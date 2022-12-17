import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Login from './pages/Login';
import Main from './pages/Main';
import Verify from './pages/Verify';

function App() {
  return (
    <>
      <Router>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path="/" element={<Main/>}></Route>
          <Route path='/verify' element={<Verify />}></Route>
          <Route path='/error' element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
