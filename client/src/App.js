
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/profile' element={<Profile/>}/>

   </Routes>
   
   </BrowserRouter>
   
   </>
    </div>
  );
}

export default App;
