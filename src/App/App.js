import './App.css';
import { Routes, Route } from 'react-router-dom';
import Newsletter from '../Page/Newsletter';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Newsletter/>}/>
      </Routes>
    </div>
  );
}

export default App;
