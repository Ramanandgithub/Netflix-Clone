import logo from './logo.svg';
import './App.css';
import BestHeader from './component/BestHeader';
import MiddleContent from './component/MiddleContent';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signup';
import Card from './component/Card';
import ShowMovieCard from './component/ShowMovieCard';
import Player from './pages/Player';
import UpcomingMovie from './component/UpcomingMovie';
import PlayUpcomingMovie from './pages/PlayUpcomingMovie';
import PlayTopRatedMovie from './pages/PlayTopRated';
function App() {
  return (
    // <div className="App">

    //   <Navbar>
    //     <MiddleContent/>
    //   </Navbar>
      
    // </div>

    <Routes>
      <Route path='/' element={<BestHeader/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<BestHeader />}/>
      <Route path='/card' element={<ShowMovieCard />} />
      <Route path='/player/:id' element={<Player />} />
      <Route path='/upcoming/:id' element={<PlayUpcomingMovie />} />
      <Route path='/toprated/:id' element={<PlayTopRatedMovie />} />
    </Routes>


  );
}

export default App;
