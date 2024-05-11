import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Appbar from './component/Appbar';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import Showall from './component/Showall';
import StudentProfile from './component/Student/student';

function App({store}) {
  return (
    <div className="App">
      <BrowserRouter>
          <Appbar store = {store} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reg' element={<SignUp />} />
            <Route path='/log' element={<SignIn store={store} />} />
            <Route path='/sho' element={<Showall />} />
            <Route path='/student' element={<StudentProfile />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
