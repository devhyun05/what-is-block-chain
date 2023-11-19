import './App.css'
import { Route, Routes} from "react-router-dom"; 
import Main from './pages/Main';
import NavigationBar from './components/NavigationBar'; 
import Mining from './pages/Mining'; 
import SmartContract from './pages/SmartContract';

function App() {
  return (
    <>
      <NavigationBar/> 
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/mining" element={<Mining/>}/>
        <Route path="/smartcontract" element={<SmartContract/>}/>
      </Routes>
    </>
  )
}

export default App
