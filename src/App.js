
import './App.css';

import {ListingsHome} from './Listings';
import {NewListings} from './components/NewListings';

import NavBar from './components/navbar/NavBar'


function App() {
  return (
    <div className="App">
      <NavBar />
     <ListingsHome />
     <NewListings />
    </div>
  );
}

export default App;
