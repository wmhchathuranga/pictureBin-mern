import NavBar from './components/Navbar';
import HomeHeader from './components/HomeHeader';
import MyGallery from './components/MyGallery';
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div className="container1 dark:bg-slate-900 bg-slate-50 h-screen overflow-hidden">
      <NavBar />

      <Routes >
        <Route path='/' element={<HomeHeader />} />

        <Route path='/gallery' element={<MyGallery />} />

      </Routes>
    </div>
  );



}

export default App;
