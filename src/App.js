import './App.css';
import ListFlight from './components/ListFlight';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch, Routes, useNavigate, withRouter } from 'react-router-dom';
import AddFlight from './components/AddFlight';
import UpdateFlight from './components/UpdateFlight';
import Welcome from './components/Welcome';

function App() {
  return (
    
      <Router>
        <div className="container-fluid">
          <Header></Header>
          <div className='container'>
            <Routes>
              {/* <Route path='/' Component={Welcome}></Route> */}
              {/* <Route path='/' Component={ListFlight}></Route> */}
              <Route path='/' element={<ListFlight />} />
              <Route path='/flights' Component={ListFlight}></Route>
              <Route path='/add-flight' Component={AddFlight}></Route>
              <Route path='/update-flight/:flightId' Component={UpdateFlight}></Route>
              {/* <ListFlight/> */}
            </Routes>
          </div>
        </div>
      </Router>
    
   
  );
}

export default App;
