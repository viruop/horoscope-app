import './App.css';
import { Routes , Route} from 'react-router-dom'
import User from './pages/User';
import Another from './pages/Another'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
function App() {

  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/user" element={<User/>} />
    <Route path="/another" element={<Another/>} />
    </Routes>

               </div>
  );
}

export default App;
