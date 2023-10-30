
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './Pages/Landingpage';
import Home from './Pages/Home';
import Head from './Components/Head';
import Footer from './Components/Footer';
import History from './Pages/History';
import Display from './Pages/Display';

function App() {
  return (
    <div className="App">
      <Head></Head>
    <Routes>
       <Route path='/' element={<Landingpage></Landingpage>} ></Route>
       <Route path='/view' element={<Home></Home>} ></Route>
       <Route path='/history' element={<History></History>}></Route>
       <Route path='/display/:id' element={<Display></Display>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
