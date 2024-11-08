import './App.css';
import ListFlight from './components/ListFlight';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddFlight from './components/AddFlight';
import UpdateFlight from './components/UpdateFlight';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header></Header>
        <div className='container'>
          <Routes>
            {/* Make ListFlight the default component for both / and /flights */}
            <Route path='/' element={<ListFlight />} />
            <Route path='/flights' element={<ListFlight />} />
            <Route path='/add-flight' element={<AddFlight />} />
            <Route path='/update-flight/:flightId' element={<UpdateFlight />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
