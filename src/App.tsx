import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <div>SpaceFlight</div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
